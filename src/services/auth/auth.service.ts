import { CreateUserArgs, LoginArgs, LoginResponse, UserData } from '@/services/auth/auth.types'
import { flashcardsApi } from '@/services/flashcards-api'

export const authService = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      authMe: builder.query<UserData, void>({
        providesTags: ['Me'],
        query: () => ({
          method: 'GET',
          url: `/v1/auth/me`,
        }),
      }),
      createNewAccount: builder.mutation<UserData, CreateUserArgs>({
        invalidatesTags: ['Me'],
        query: args => ({
          body: { email: args.email, password: args.password },
          method: 'POST',
          params: args,
          url: `/v1/auth/sign-up`,
        }),
      }),
      logOut: builder.mutation({
        invalidatesTags: ['Me'],
        async onQueryStarted(_: void, { queryFulfilled }) {
          try {
            await queryFulfilled
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
          } catch (err) {
            console.error(err)
          }
        },
        query: () => ({
          method: 'POST',
          url: `/v2/auth/logout`,
        }),
      }),
      login: builder.mutation<LoginResponse, LoginArgs>({
        invalidatesTags: ['Me'],
        async onQueryStarted(_, { queryFulfilled }) {
          const { data } = await queryFulfilled

          if (!data) {
            return
          }

          localStorage.setItem('accessToken', data.accessToken)
          localStorage.setItem('refreshToken', data.refreshToken)
        },
        query: arg => ({
          body: { email: arg.email, password: arg.password, rememberMe: arg.rememberMe },
          method: 'POST',
          url: `/v1/auth/login`,
        }),
      }),
    }
  },
})

export const { useAuthMeQuery, useCreateNewAccountMutation, useLogOutMutation, useLoginMutation } =
  authService
