import { BookModel } from "model/bookModel";

export enum SCREENS {
  AuthorizedApp = 'AuthorizedApp',
  Login = 'Login',
  Books = 'Books',
  Book = 'Book',
  FavoriteBooks = 'FavoriteBooks',
  Profile = 'Profile',
  Logout = 'Logout',
}

export type RootNavigationParamList = {
  [SCREENS.AuthorizedApp]: undefined;
  [SCREENS.Login]: undefined;
  [SCREENS.Books]: undefined;
  [SCREENS.Book]: { data: BookModel };
  [SCREENS.FavoriteBooks]: undefined;
  [SCREENS.Profile]: undefined;
  [SCREENS.Logout]: undefined;
};
