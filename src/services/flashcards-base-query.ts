import { router } from '@/routers/router'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'
import { z } from 'zod'

// import { loggedOut, tokenReceived } from './authSlice'

const refreshTokenResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
})

// create a new mutex
const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es',
  prepareHeaders: headers => {
    const token = localStorage.getItem('accessToken')

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  },
})

export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshToken = localStorage.getItem('refreshToken')

        const refreshResult = await baseQuery(
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
            method: 'POST',
            url: `/v2/auth/refresh-token`,
          },
          api,
          extraOptions
        )

        if (refreshResult.data) {
          const refreshResultParsed = refreshTokenResponseSchema.parse(refreshResult.data)

          // api.dispatch(tokenReceived(refreshResult.data))
          localStorage.setItem('accessToken', refreshResultParsed.accessToken)
          localStorage.setItem('refreshToken', refreshResultParsed.refreshToken)

          result = await baseQuery(args, api, extraOptions)
        } else {
          // api.dispatch(loggedOut())
          router.navigate('/login')
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
