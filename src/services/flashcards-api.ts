import {
  DecksListResponse,
  GetDecksArgs,
  NewDeckResponse,
  PatchDeckArgs,
  PostDeckArgs,
  UpdatedDeckResponse,
} from '@/services/decks/deck.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const flashcardsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      createDeck: builder.mutation<NewDeckResponse, PostDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({
          body: { name: args.name },
          method: 'POST',
          params: args,
          url: `/v1/decks`,
        }),
      }),
      getDecks: builder.query<DecksListResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: arg => ({
          method: 'GET',
          params: arg ?? undefined,
          url: `v2/decks`,
        }),
      }),
      removeDeck: builder.mutation<PatchDeckArgs, string>({
        invalidatesTags: ['Decks'],
        query: (id, ...arg) => ({
          method: 'DELETE',
          params: arg,
          url: `/v1/decks/${id}`,
        }),
      }),
      updateDeck: builder.mutation<UpdatedDeckResponse, PatchDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({
          body: { name: args.name },
          method: 'PATCH',
          params: args,
          url: `/v1/decks/${args.id}`,
        }),
      }),
    }
  },
  reducerPath: 'flashcardsApi',
  tagTypes: ['Decks'],
})

export const {
  useCreateDeckMutation,
  useGetDecksQuery,
  useRemoveDeckMutation,
  useUpdateDeckMutation,
} = flashcardsApi
