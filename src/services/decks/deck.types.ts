export interface DecksListResponse {
  items: Deck[]
  pagination: Pagination
}

export type NewDeckResponse = {
  _count: Count
} & Omit<Deck, 'isFavorite'>

export type UpdatedDeckResponse = Omit<Deck, 'author' | 'isFavorite'>

export interface Pagination {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export interface Deck {
  author: Author
  cardsCount: number
  cover?: string
  created: string
  id: string
  isFavorite: boolean
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export interface Author {
  id: string
  name: string
}

export interface GetDecksArgs {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export interface Count {
  card: number
}

export type PostDeckArgs = {
  isPrivate?: boolean
  name: string
} & Pick<Deck, 'cover'>

export type PatchDeckArgs = {
  id: string
} & Partial<PostDeckArgs>
