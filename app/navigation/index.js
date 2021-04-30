import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Landing from '@screens/Landing';
import Settings from '@screens/Settings';
import Terms from '@screens/Terms';
import Policy from '@screens/Policy';
import Contact from '@screens/Contact';
import SearchList from '@screens/SearchList';
import Reports from '@screens/Reports';
import Inbox from '@screens/Inbox';
import DrawerContent from '@screens/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={MainStack}
            options={{ headerShown: false, gestureEnabled: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShiftStack"
        component={ShiftStack}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
}

function ShiftStack() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Landing" component={Landing} />
      <Drawer.Screen name="Terms" component={Terms} />
      <Drawer.Screen name="Policy" component={Policy} />
      <Drawer.Screen name="SearchList" component={SearchList} />
      <Drawer.Screen name="Reports" component={Reports} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
}

export default Navigation;
