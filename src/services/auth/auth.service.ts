import { CreateUserArgs, LoginArgs, LoginResponse, UserData } from '@/services/auth/auth.types'
import { flashcardsApi } from '@/services/flashcards-api'

export const authService = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      authMe: builder.query<UserData, void>({
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

export const { useAuthMeQuery, useCreateNewAccountMutation, useLoginMutation } = authService