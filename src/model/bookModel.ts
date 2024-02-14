export interface BookModel {
  id: string
  title: string
  description: string
  author: string
  url: string
  fileSize: number
  audiolenth: number
  isFaforite: boolean
  likes: number
  icon: string
}

export interface FavoriteBoookModel extends BookModel {
  isListened: boolean
  listenProgress: number
}