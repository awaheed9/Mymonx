import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VerificationCode = () => {
    const [code, setCode] = useState('');

    const onSubmit = () => {
        // Submit logic goes here
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <View style={styles.textCenter}>
                    <Text style={styles.title}>Please enter Verification code</Text>
                    <Text>Verification code has been sent to kashif@mail.com</Text>
                </View>

                <View style={styles.optField}>
                    <TextInput
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            // Handle input logic
                            // For example, update state or move focus to the next input
                        }}
                    />
                   
                   <TextInput
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            // Handle input logic
                            // For example, update state or move focus to the next input
                        }}
                    />
                     <TextInput
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            // Handle input logic
                            // For example, update state or move focus to the next input
                        }}
                    />
                     <TextInput
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            // Handle input logic
                            // For example, update state or move focus to the next input
                        }}
                    />
                     <TextInput
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            // Handle input logic
                            // For example, update state or move focus to the next input
                        }}
                    />
                     <TextInput
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            // Handle input logic
                            // For example, update state or move focus to the next input
                        }}
                    />
                </View>

                <TouchableOpacity style={styles.reacquireButton} onPress={onSubmit}>
                    <Text style={styles.reacquireButtonText}>Require?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.cantGetCode}>Can't get Verification code?</Text>
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
    textCenter: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    optField: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    input: {
        width: '16%',
        height: 50,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        textAlign: 'center',
    },
    reacquireButton: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
    },
    reacquireButtonText: {
        color: '#000000',
        fontWeight: 'bold',
    },
    cantGetCode: {
        marginTop: 20,
        fontWeight: 'bold',
        color: '#45BFAB',
        textAlign: 'center',
    },
});

export default VerificationCode;
