import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../ui/screens/Login/Login.screen';
import Register from '../ui/screens/Register/Register.screen';
import ForgotPassword from '../ui/screens/MineTab/ForgetPassword.screen';
import VerificationCode from '../ui/screens/VerificationCode/VerificationCode.screen';
import Signup from '../ui/screens/Profile/Profile.screen';
import AppRoutes from './App.routes';
const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator initialRouteName="Login"  screenOptions={{headerShown: false  }}>
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Register" component={Register} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    <AuthStack.Screen name="VerificationCode" component={VerificationCode} />
    <AuthStack.Screen name="Signup" component={Signup} />
    <AppRoutes></AppRoutes>
  </AuthStack.Navigator>
);

export default AuthRoutes;