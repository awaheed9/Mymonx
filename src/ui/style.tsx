// defaultStyles.js

import { StyleSheet } from 'react-native';

const defaultStyles =StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF', // Use secondary color
      paddingHorizontal: 20,
    },
    loginContainer: {
      width: '90%',
      maxWidth: 400,
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    },
    inputContainer: {
      marginBottom: 20,
    },
    input: {
      width: '100%',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#CCCCCC',
    },
    icon: {
      position: 'absolute',
      left: 10,
      top: '50%',
      transform: [{ translateY: -10 }], // Centering vertically
      color: '#999',
    },
    forgotPassword: {
      textAlign: 'right',
      fontSize: 14,
      color: '#45BFAB', // Use primary color
    },
    signupLink: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
    },
    signupLinkText: {
      color: '#45BFAB', // Use primary color
      textDecorationLine: 'none',
    },
  });

export default defaultStyles;
