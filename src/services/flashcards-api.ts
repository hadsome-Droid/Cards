import { DecksListResponse, GetDecksArgs } from '@/services/decks/deck.types'
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
      createDeck: builder.mutation<any, any>({
        providesTags: ['Decks'],
        query: (name, ...arg) => ({
          body: { name },
          method: 'POST',
          params: arg,
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
      removeDeck: builder.mutation<any, any>({
        providesTags: ['Decks'],
        query: (id, ...arg) => ({
          method: 'DELETE',
          params: arg,
          url: `/v1/decks/${id}`,
        }),
      }),
      updateDeck: builder.mutation<any, any>({
        providesTags: ['Decks'],
        query: (id, name, ...arg) => ({
          body: { name },
          method: 'PATCH',
          params: arg,
          url: `/v1/decks/${id}`,
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
