import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPassword = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState(false);

    const onSubmit = () => {
        // Submit logic goes here
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                {/* <Text style={styles.loginTitle}>Forgot Password</Text> */}

                <View style={styles.formGroup}>
                    <Text style={styles.icon}>👤</Text>
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
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                    />
                </View>

                <View style={styles.checkboxContainer}>
                    <TouchableOpacity
                        style={[styles.checkbox, agree && styles.checked]}
                        onPress={() => setAgree(!agree)}
                    />
                    <Text style={styles.checkboxLabel}>
                        I have read and agree{' '}
                        <Text style={styles.signupLinkText}>User Agreement</Text> and{' '}
                        <Text style={styles.signupLinkText}>Privacy Policy</Text>
                    </Text>
                </View>

                <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
    },
    loginContainer: {
        width: '90%',
        maxWidth: 400,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 20,
    },
    loginTitle: {
        textAlign: 'center',
        marginBottom: 20,
    },
    formGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
    icon: {
        fontSize: 20,
        marginRight: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#45BFAB',
        backgroundColor: '#FFFFFF',
        marginRight: 10,
    },
    checked: {
        backgroundColor: '#45BFAB',
    },
    checkboxLabel: {
        flex: 1,
        color: '#45BFAB',
    },
    signupLinkText: {
        color: '#45BFAB',
        textDecorationLine: 'underline',
    },
    submitButton: {
        backgroundColor: '#45BFAB',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#FFFFFF',
    },
});

export default ForgotPassword;
