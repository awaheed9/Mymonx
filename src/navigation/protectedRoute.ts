import { useNavigation } from "@react-navigation/native";
import LocalStorageService from '../infrastructure/local-storage-service';

  
  const ProtectedRoute: React.FC<any> = ({ children }) => {
    const validUser =LocalStorageService.getAccessToken();
    const navigation = useNavigation<any>();

    if (!validUser) {
      // Redirect to the login screen using navigation
      navigation.navigate('Login');
      return null; // Returning null because the redirection is handled by navigation.navigate
    }
  
    // Render the children if the user is valid
    return children;
}

export default ProtectedRoute;