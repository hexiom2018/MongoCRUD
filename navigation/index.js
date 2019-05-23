import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Home from '../src/screens/home'
import Create from  '../src/screens/create'
import Read from '../src/screens/read'
import Update from '../src/screens/update'

const StackNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    Create:{
        screen:Create
    },
    Read:{
        screen:Read
    },
    Update:{
        screen:Update
    }

},
);

const Navigation = createAppContainer(StackNavigator)
export default Navigation;