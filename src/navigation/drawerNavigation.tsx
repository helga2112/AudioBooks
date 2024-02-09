import {createDrawerNavigator} from '@react-navigation/drawer';

import {SCREENS} from './constants';
import {BooksScreen} from '../screens/booksShelf/booksShelfScreen';
import {FavoriteBooksScreen} from '../screens/favourites/favoriteBoolsScreen';
import {LogoutScreen} from '../screens/logout/logoutScreen';
import {ProfileScreen} from '../screens/profile/profile';

const Drawer = createDrawerNavigator();

function DraweraNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={SCREENS.Books} component={BooksScreen} />
      <Drawer.Screen
        name={SCREENS.FavoriteBooks}
        component={FavoriteBooksScreen}
      />
      <Drawer.Screen name={SCREENS.Profile} component={ProfileScreen} />
      <Drawer.Screen name={SCREENS.Logout} component={LogoutScreen} />
    </Drawer.Navigator>
  );
}

export default DraweraNavigation;
