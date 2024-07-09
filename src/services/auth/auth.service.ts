import { CreateUserArgs, UserData } from '@/services/auth/auth.types'
import { flashcardsApi } from '@/services/flashcards-api'

export const authService = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      createNewAccount: builder.mutation<UserData, CreateUserArgs>({
        invalidatesTags: ['Auth'],
        query: args => ({
          body: { email: args.email, password: args.password },
          method: 'POST',
          params: args,
          url: `/v1/auth/sign-up`,
        }),
      }),
    }
  },
})

export const { useCreateNewAccountMutation } = authService
