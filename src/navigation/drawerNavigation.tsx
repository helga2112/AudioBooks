import { createDrawerNavigator } from '@react-navigation/drawer';
import { SCREENS } from './constants';
import { BooksScreen } from '../screens/booksShelf/booksShelfScreen';
import { ProfileScreen } from '../screens/profile/profile';

const Drawer = createDrawerNavigator();

function DraweraNavigation() {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name={SCREENS.Books} component={BooksScreen} />
            <Drawer.Screen name={SCREENS.FavoriteBooks} component={ProfileScreen} />
        </Drawer.Navigator>
    );
}

export default DraweraNavigation
