import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../../../application/features/security-service/securityServiceThunk';
import { RootState } from '../../../application/store/index';
import ToastComponent from '../../components/mymonx-toaster';
import { LoginCredentialsDto } from '../../../application/features/security-service/models/login-credentials-dto';
import { useNavigation } from '@react-navigation/native';
import FontAwesome, { SolidIcons, parseIconFromClassName } from 'react-native-fontawesome';
import Icon from 'react-native-fontawesome';
import { logout } from '../../../application/features/security-service/securityServiceSlice';


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<any>();
    const { currentUser, apiError } = useSelector((state: RootState) => state.securityService);
    const toastRef = useRef<any>(null);
    const navigation = useNavigation<any>();
    const parsedIconUser = parseIconFromClassName('fa fa-user');
    const parsedIconPassword = parseIconFromClassName('fa fa-lock');

    const onSubmit = () => {
        navigation.navigate('Signup');
        const loginCredentials: LoginCredentialsDto = {
            grant_type: "",
            username: username,
            password: password,
            scope: "",
            client_id: "",
            client_secret: ""
        };
        dispatch(loginAsync(loginCredentials));
    };

    useEffect(() => {
        if (currentUser !== undefined) {
            navigation.navigate('Home');
        }
    }, [currentUser]);

    useEffect(() => {
        if (apiError && apiError.status === 401) {
            toastRef?.current?.show({
                type: 'error',
                text1: 'Error',
                text2: apiError.error,
            });
        }
    }, [apiError]);
    const skipLogin = () => {
        dispatch(logout());
        // Navigate to the desired screen
        navigation.navigate('Home'); // Change 'Home' to the screen you want to navigate to
    };

    return (
        <View style={styles.container}>
            {/* <View style={{position:"absolute",paddingLeft:350,paddingTop:10}}>
                <Text onPress={skipLogin}>Skip</Text>
            </View> */}
            <View style={styles.loginContainer}>
                <Text style={[styles.loginTitle,{top:0}]}>Sign-in</Text>

                <View style={styles.formGroup}>
                <Text style={styles.icon}>👤</Text>
                <FontAwesome />
                    <TextInput
                        placeholder="Username"
                        style={styles.input}
                        onChangeText={setUsername}
                        value={username}
                    />
                </View>

                <View style={styles.formGroup}>
                <Text style={styles.icon}>🔒</Text>
                      <TextInput
                        placeholder="Password"
                        secureTextEntry
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                    />
                </View>
                <View style={styles.formGroup}>
                <Text style={styles.icon}>🔒</Text>
                        <TextInput
                        placeholder="Confirm Password"
                        secureTextEntry
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                    />
                </View>
                {/* <View style={styles.formLinkContainer}>
                    <TouchableOpacity>
                        <Text style={styles.signupLinkText}>Sign Up Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.signupLinkText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View> */}

                <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.noAccountLogin} onPress={()=>{navigation.navigate('Login');}}>No Account Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
       // backgroundColor: '#FFFFFF',
        paddingHorizontal: 0,
        color:'grey'
    },
    loginContainer: {
        width: '90%',
        maxWidth: 400,
       // backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 20,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 10,
        // elevation: 5,
    },
    loginTitle: {
        textAlign: 'center',
        marginBottom: 20,
    },
    formGroup: {
        position: 'relative',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        paddingLeft: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
    icon: {
        position: 'absolute',
        left: 10,
        top: '50%',
        transform: [{ translateY: -10 }],
        color: '#999',
    },
    formLinkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    signupLinkText: {
        color: '#45BFAB',
        textDecorationLine: 'underline',
    },
    loginButton: {
        backgroundColor: '#45BFAB',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#FFFFFF',
    },
    noAccountLogin: {
        marginTop: 20,
        fontWeight: 'bold',
        color: '#45BFAB',
        textAlign: 'center',
    },
});

export default Register;
