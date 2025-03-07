import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from './android/app/src/pages/Signup';
import Login from './android/app/src/pages/Login';
import Home from './android/app/src/pages/Home';
import AdminHome from './android/app/src/pages/AdminHome';
import UserHome from './android/app/src/pages/UserHome';
import CreateClass from './android/app/src/pages/CreateClass';
import ClassList from './android/app/src/pages/ClassList';
import EditClass from './android/app/src/pages/EditClass';
import UploadAssignment from './android/app/src/pages/UploadAssignment';
import ViewAssignments from './android/app/src/pages/ViewAssignments';
import Results from './android/app/src/pages/Results';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Signup" component={SignUpPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="UserHome" component={UserHome} options={{ headerShown : false}} />
        <Stack.Screen name="AdminHome" component={AdminHome} options={{ headerShown : false}} />
        <Stack.Screen name="CreateClass" component={CreateClass}  />
        <Stack.Screen name="ClassList" component={ClassList} /> 
        <Stack.Screen name="EditClass" component={EditClass} />
        <Stack.Screen name="UploadAssignment" component={UploadAssignment} />
        <Stack.Screen name="ViewAssignments" component={ViewAssignments} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}