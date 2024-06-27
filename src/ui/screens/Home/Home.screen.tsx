import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
    const navigation = useNavigation<any>();

    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Abdul's HomePage</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Equipment')}>
                    {/* <Text style={styles.headerIcon}>⌚</Text> */}
                    <Image source={require('../../../assets/images/home_icon_btoff_gr.png')}
                    style={{ width: 24, height: 24 }}
                    ></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.innercontent}>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => navigation.navigate('VitalsGraphsGlucose')}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardHeaderText}>Glucose</Text>
                                <View style={[styles.badge, { backgroundColor: '#DC3545' }]}></View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.cardBody}>
                            <Image
                                source={require('../../../assets/images/home_measure_icon_tp.png')}
                                style={{ width: 24, height: 24, marginRight: 20 }}
                            />
                            <Text>6.6</Text>
                            <Text>mmol/L</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => navigation.navigate('ECG')}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardHeaderText}>ECG</Text>
                                <View style={[styles.badge, { backgroundColor: '#FFC107' }]}></View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.cardBody}>
                            <Image
                                source={require('../../../assets/images/home_measure_icon_ecg.png')}
                                style={{ width: 24, height: 24, marginRight: 20 }}
                            />
                            <Text></Text>
                            <Text></Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('Sleep')}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardHeaderText}>Sleep</Text>
                            <View style={[styles.badge, { backgroundColor: '#6610F2' }]}></View>
                        </View>
                        </TouchableOpacity>
                        <View style={styles.cardBody}>
                            <Image
                                source={require('../../../assets/images/home_measure_icon_sleep.png')}
                                style={{ width: 24, height: 24, marginRight: 20 }}
                            />
                            <Text>8h 0.2m</Text>
                            <Text></Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => navigation.navigate('VitalsGraphsBP')}>
                            <View style={styles.cardHeader} >
                                <Text style={styles.cardHeaderText}>Blood Pressure</Text>
                                <View style={[styles.badge, { backgroundColor: '#DC3545' }]}></View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.cardBody}>
                            <Image
                                source={require('../../../assets/images/home_measure_icon_blood_sugar.png')}
                                style={{ width: 24, height: 24, marginRight: 20 }}
                            />
                            <Text>120/80</Text>
                            <Text>mmHg</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => navigation.navigate('Steps')}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardHeaderText}>Steps</Text>
                                <View style={[styles.badge, { backgroundColor: '#D9B6EE' }]}></View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.cardBody}>
                            <Image
                                source={require('../../../assets/images/home_measure_icon_sport.png')}
                                style={{ width: 24, height: 24, marginRight: 20 }}
                            />
                            <Text>9,567</Text>
                            <Text>steps</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => navigation.navigate('HeartRate')}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardHeaderText}>Heart Rate</Text>
                                <View style={[styles.badge, { backgroundColor: '#DE6262' }]}></View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.cardBody}>
                            <Image
                                source={require('../../../assets/images/home_measure_icon_hr.png')}
                                style={{ width: 24, height: 24, marginRight: 20 }}
                            />
                            <Text>89</Text>
                            <Text>bpm</Text>
                        </View>
                    </View>


                    <View style={styles.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('Stress')}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardHeaderText}>Stress</Text>
                            <View style={[styles.badge, { backgroundColor: '#28A745' }]}></View>
                        </View>
                        </TouchableOpacity>
                        <View style={styles.cardBody}>
                            <Image
                                source={require('../../../assets/images/home_measure_icon_rr.png')}
                                style={{ width: 24, height: 24, marginRight: 20 }}
                            />
                            <Text>73</Text>
                            <Text></Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('RespiratoryRate')}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardHeaderText}>Respiratory Rate</Text>
                            <View style={[styles.badge, { backgroundColor: '#007BFF' }]}></View>
                        </View>
                        </TouchableOpacity>
                        <View style={styles.cardBody}>
                            <Image
                                source={require('../../../assets/images/main_tab_user_normal.png')}
                                style={{ width: 24, height: 24, marginRight: 20 }}
                            />
                            <Text>15</Text>
                            <Text>rpm</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                    <TouchableOpacity onPress={() => navigation.navigate('Temperature')}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardHeaderText}>Temperature</Text>
                            <View style={[styles.badge, { backgroundColor: '#6C757D' }]}></View>
                        </View>
                        </TouchableOpacity>
                        <View style={styles.cardBody}>
                            <Image
                                source={require('../../../assets/images/main_tab_user_normal.png')}
                                style={{ width: 24, height: 24, marginRight: 20 }}
                            />
                            <Text>31.8</Text>
                            <Text></Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => navigation.navigate('OxygenSaturation')}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardHeaderText}>Oxygen Saturation</Text>
                                <View style={[styles.badge, { backgroundColor: '#17A2B8' }]}></View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.cardBody}>
                            <Image
                                source={require('../../../assets/images/home_measure_icon_bo.png')}
                                style={{ width: 24, height: 24, marginRight: 20 }}
                            />
                            <Text>98%</Text>
                            <Text>bpm</Text>
                        </View>
                    </View>
                </View>
            </View>

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    innercontent: {
        flex: 1,
        padding: 16,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        width: '48%',
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
    cardHeaderText: {
        flex: 1,
        fontSize: 12,
    },
    badge: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    cardBody: {
        padding: 20,
        alignItems: 'center',
        flexDirection: "row"
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 8,
        borderTopWidth: 1,
        borderTopColor: '#CCCCCC',
    },
    footerItem: {
        textAlign: 'center',
        color: '#45BFAB',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        color: '#45BFAB',
        fontWeight: 'bold',
        fontSize: 16,
    },
    headerIcon: {
        fontSize: 24,
        color: '#45BFAB',
    },
});

export default Home;
