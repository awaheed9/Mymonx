import React, {useMemo} from 'react';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import AuthRoutes from './Auth.routes';
import AppRoutes from './App.routes';
import LocalStorageService from '../infrastructure/local-storage-service';
import { useColorScheme } from 'react-native';

const Routes: React.FC = () => {
  const validUser = LocalStorageService.getAccessToken();
  
    const theme = useColorScheme();
  const ActiveRoute = useMemo(() => {
    return  validUser? <AppRoutes /> : <AppRoutes />;
  }, [validUser]);

  return <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>{ActiveRoute}</NavigationContainer>;
};

export default Routes;

