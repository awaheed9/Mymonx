import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity } from 'react-native';

// Home Screens
import Home from '../ui/screens/Home/Home.screen';
import Profile from '../ui/screens/Profile/Profile.screen';
import VitalsGraphsBP from '../ui/screens/HomeScreens/BloodPressure/BP.screen';
import VitalsGraphsGlucose from '../ui/screens/Glucose/Glucose.screen';
import ECG from '../ui/screens/HomeScreens/ECG/ECG.screen';
import SleepScreen from '../ui/screens/HomeScreens/Sleep/Sleep.screen';
import OxygenSaturationScreen from '../ui/screens/HomeScreens/OxygenSaturation/OxygenSaturation.screen';
import HeartRateScreen from '../ui/screens/HomeScreens/HeartRate/HeartRate.screen';
import StressScreen from '../ui/screens/HomeScreens/Stress/Stress.screen';
import TemperatureScreen from '../ui/screens/HomeScreens/Temperature/Temperature.screen';
import RespiratoryRateScreen from '../ui/screens/HomeScreens/RespiratoryRate/RespiratoryRate.screen';
import StepsScreen from '../ui/screens/HomeScreens/StepsScreen/Steps.screen';
import WatchInfoScreen from '../ui/screens/moymoxInfo/info.screen';
import Equipment from '../ui/screens/Equipment/Equipment.screen';
import HealthSettings from '../ui/screens/HealthSettings/HealthSettings.screen';
import WatchFaceMarketScreen from '../ui/screens/Equipment/WatchFaceMarket.screen';
import CustomDialScreen from '../ui/screens/Equipment/CustomDial.screen';
import MessagePushScreen from '../ui/screens/Equipment/MessagePush.screen';
import AntiLossScreen from '../ui/screens/Equipment/AntiLoss.screen';
import MoreSettingsScreen from '../ui/screens/Equipment/MoreSettingsScreen';
import DoNotDisturbScreen from '../ui/screens/Equipment/DoNotDisturbScreen';
import AlarmClockScreen from '../ui/screens/Equipment/AlarmClockScreen';
import PhotographScreen from '../ui/screens/Equipment/PhotographScreen';
import UnitSettingsScreen from '../ui/screens/Equipment/UnitSettingsScreen';
import DisplaySettingsScreen from '../ui/screens/Equipment/DisplaySettingsScreen';
import ThirdPartyServicesScreen from '../ui/screens/Equipment/ThirdPartyServicesScreen';
import ResetButtonScreen from '../ui/screens/Equipment/ResetButtonScreen';

// Care Screens
import CarePage from '../ui/screens/CarePage/CarePage.screen';
import AddCarePage from '../ui/screens/CarePage/AddCarePage.screen';

// Sport Screens
import SportTabScreen from '../ui/screens/Sports/Sports.screen';
import RunningInProgressScreen from '../ui/screens/Sports/RunningInprogress.screen';
import CyclingInProgressScreen from '../ui/screens/Sports/CyclingInProgressScreen';
import FitnessInProgressScreen from '../ui/screens/Sports/FitnessInProgressScreen';
import RopeskippingInProgressScreen from '../ui/screens/Sports/RopeskippingInProgressScreen';
import BasketballInProgressScreen from '../ui/screens/Sports/BasketballInProgressScreen';
import BadmintonInProgressScreen from '../ui/screens/Sports/BadmintonInProgressScreen';
import TableTennisInProgressScreen from '../ui/screens/Sports/TableTennisInProgressScreen';
import EndSessionPopup from '../ui/screens/Sports/EndSessionPopup';
import SportsRecordScreen from '../ui/screens/Sports/SportsRecordScreen';

// MineTab Screens
import MineTab from '../ui/screens/MineTab/MineTab.screen';
import AboutUs from '../ui/screens/MineTab/AboutUs.screent';
import PersonalInfo from '../ui/screens/MineTab/PersonalInfo.screen';
import ForgotPassword from '../ui/screens/MineTab/ForgetPassword.screen';
import SecuritySettings from '../ui/screens/MineTab/SecuritySetting.screen';
import DeleteAccount from '../ui/screens/MineTab/DeleteAccount.screen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const stackScreenOptions = (title:any) => ({
  headerTitle: title,
  headerLeft: ({ navigation }:any) => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require('../assets/images/icon_topbar_back.png')}
        style={{ width: 24, height: 24, marginLeft: 20 }}
      />
    </TouchableOpacity>
  ),
});

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
    <Stack.Screen name="Equipment" component={Equipment} options={{ headerShown: false }} />
    <Stack.Screen name="VitalsGraphsBP" component={VitalsGraphsBP} options={stackScreenOptions('Blood Pressure')} />
    <Stack.Screen name="VitalsGraphsGlucose" component={VitalsGraphsGlucose} options={stackScreenOptions('Glucose')} />
    <Stack.Screen name="ECG" component={ECG} options={stackScreenOptions('ECG')} />
    <Stack.Screen name="Sleep" component={SleepScreen} options={stackScreenOptions('Sleep')} />
    <Stack.Screen name="OxygenSaturation" component={OxygenSaturationScreen} options={stackScreenOptions('Oxygen Saturation')} />
    <Stack.Screen name="HeartRate" component={HeartRateScreen} options={stackScreenOptions('Heart Rate')} />
    <Stack.Screen name="Stress" component={StressScreen} options={stackScreenOptions('Stress')} />
    <Stack.Screen name="Temperature" component={TemperatureScreen} options={stackScreenOptions('Temperature')} />
    <Stack.Screen name="RespiratoryRate" component={RespiratoryRateScreen} options={stackScreenOptions('Respiratory Rate')} />
    <Stack.Screen name="Steps" component={StepsScreen} options={stackScreenOptions('Steps')} />
    <Stack.Screen name="WatchInfoScreen" component={WatchInfoScreen} options={stackScreenOptions('mymox')} />
    <Stack.Screen name="HealthSettings" component={HealthSettings} options={stackScreenOptions('Health Setting')} />
    <Stack.Screen name="Healthcolumn" component={HealthSettings} options={stackScreenOptions('Health column')} />
    <Stack.Screen name="WatchFaceMarket" component={WatchFaceMarketScreen} />
    <Stack.Screen name="CustomDial" component={CustomDialScreen} />
    <Stack.Screen name="MessagePush" component={MessagePushScreen} />
    <Stack.Screen name="AntiLoss" component={AntiLossScreen} />
    <Stack.Screen name="MoreSettings" component={MoreSettingsScreen} />
    <Stack.Screen name="DoNotDisturb" component={DoNotDisturbScreen} />
    <Stack.Screen name="AlarmClock" component={AlarmClockScreen} />
    <Stack.Screen name="Photograph" component={PhotographScreen} />
    <Stack.Screen name="UnitSettings" component={UnitSettingsScreen} />
    <Stack.Screen name="DisplaySettings" component={DisplaySettingsScreen} />
    <Stack.Screen name="ThirdPartyServices" component={ThirdPartyServicesScreen} />
    <Stack.Screen name="ResetButton" component={ResetButtonScreen} />
  </Stack.Navigator>
);

const CareStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="CarePage" component={CarePage} options={{ headerShown: false }} />
    <Stack.Screen name="AddFriend" component={AddCarePage} options={stackScreenOptions('Adding Care')} />
  </Stack.Navigator>
);

const SportStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Sports" component={SportTabScreen} options={{ headerShown: false }} />
    <Stack.Screen name="RunningInProgress" component={RunningInProgressScreen} />
    <Stack.Screen name="CyclingInProgress" component={CyclingInProgressScreen} />
    <Stack.Screen name="FitnessInProgress" component={FitnessInProgressScreen} />
    <Stack.Screen name="RopeskippingInProgress" component={RopeskippingInProgressScreen} />
    <Stack.Screen name="BasketballInProgress" component={BasketballInProgressScreen} />
    <Stack.Screen name="BadmintonInProgress" component={BadmintonInProgressScreen} />
    <Stack.Screen name="TableTennisInProgress" component={TableTennisInProgressScreen} />
    <Stack.Screen name="EndSessionPopup" component={EndSessionPopup} options={{ presentation: 'modal' }} />
    <Stack.Screen name="SportsRecord" component={SportsRecordScreen} />
  </Stack.Navigator>
);

const MineTabStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Mine" component={MineTab} options={{ headerShown: false }} />
    <Stack.Screen name="DeleteAccount" component={DeleteAccount} options={stackScreenOptions('Delete Account')} />
    <Stack.Screen name="SecuritySettings" component={SecuritySettings} options={stackScreenOptions('Security Setting')} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={stackScreenOptions('Forget Password')} />
    <Stack.Screen name="PersonalInfo" component={PersonalInfo} options={stackScreenOptions('Personal Info')} />
    <Stack.Screen name="AboutUs" component={AboutUs} options={stackScreenOptions('About Us')} />
    <Stack.Screen name="WatchInfoScreen" component={WatchInfoScreen} options={stackScreenOptions('mymox')} />
  </Stack.Navigator>
);

const AppMainRoutes = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen 
      name="Home" 
      component={HomeStack} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('../assets/images/main_tab_home_checked.png') : require('../assets/images/main_tab_home_normal.png')}
            style={{ width: 24, height: 24 }}
          />
        ),
      }}
    />
    <Tab.Screen 
      name="Sports" 
      component={SportStack} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('../assets/images/main_tab_sport_checked.png') : require('../assets/images/main_tab_sport_normal.png')}
            style={{ width: 24, height: 24 }}
          />
        ),
      }}
    />
    <Tab.Screen 
      name="Care" 
      component={CareStack} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('../assets/images/main_tab_care_checked.png') : require('../assets/images/main_tab_care_normal.png')}
            style={{ width: 24, height: 24 }}
          />
        ),
      }}
    />
    <Tab.Screen 
      name="Mine" 
      component={MineTabStack} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? require('../assets/images/main_tab_user_checked.png') : require('../assets/images/main_tab_user_normal.png')}
            style={{ width: 24, height: 24 }}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppMainRoutes;
