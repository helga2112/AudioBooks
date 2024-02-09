export enum SCREENS {
  AuthorizedApp = 'AuthorizedApp',
  Login = 'Login',
  Books = 'Books',
  FavoriteBooks = 'FavoriteBooks',
  Profile = 'Profile',
  Logout = 'Logout',
}

// TODO: incase if we need pass some parameter to rout here is an example:
// [SCREENS.Logout]:  { paramB: string; paramC: number }

export type RootNavigationParamList = {
  [SCREENS.AuthorizedApp]: undefined;
  [SCREENS.Login]: undefined;
  [SCREENS.Books]: undefined; //{ paramA: string }
  [SCREENS.FavoriteBooks]: undefined; //{ paramB: string; paramC: number }
  [SCREENS.Profile]: undefined; //{ paramB: string; paramC: number }
  [SCREENS.Logout]: undefined; //{ paramB: string; paramC: number }
};
