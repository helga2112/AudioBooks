export enum SCREENS  {
    Login ='Login',
    Books = 'Books',
    FavoriteBooks = 'FavoriteBooks'
}

export type RootNavigationParamList = {
    [SCREENS.Login]: undefined
    [SCREENS.Books]: undefined //{ paramA: string }
    [SCREENS.FavoriteBooks]: undefined //{ paramB: string; paramC: number }
  }
  