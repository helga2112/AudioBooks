export interface BookModel{
  id: number
  title: string
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