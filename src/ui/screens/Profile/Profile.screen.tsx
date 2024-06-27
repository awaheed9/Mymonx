import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Signup = () => {
    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.title}>Signup</Text>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' }}
                        style={styles.image}
                    />
                </View>

                <View style={styles.radioContainer}>
                    <View style={styles.radioGroup}>
                        <Text>Male</Text>
                        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
                    </View>
                    <View style={styles.radioGroup}>
                        <Text>Female</Text>
                        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
                    </View>
                    <View style={styles.radioGroup}>
                        <Text>Non-binary</Text>
                        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
                    </View>
                </View>

                <TextInput style={styles.input} placeholder="Email Address/Username" />
                <TextInput style={styles.input} placeholder="Phone Number" />
                <TextInput style={styles.input} placeholder="Location" />
                <TextInput style={styles.input} placeholder="Date" />
                <TextInput style={styles.input} placeholder="Middle Eastern" />
                <TextInput style={styles.input} placeholder="Healthy" />

                <TouchableOpacity style={styles.nextButton}>
                    <Text style={styles.nextButtonText}>Next 1/4</Text>
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
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000000',
        marginHorizontal: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        marginBottom: 20,
        padding: 10,
    },
    nextButton: {
        backgroundColor: '#45BFAB',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default Signup;
