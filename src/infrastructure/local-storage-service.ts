import { MMKVLoader } from 'react-native-mmkv-storage';

const AUTH_TOKEN = 'AUTH_TOKEN';
const ORG_REGISTER = 'ORG_REGISTER';

// Initialize the MMKV storage
const storage = new MMKVLoader().initialize();

const setAccessToken = (token: string) => {
  storage.setString(AUTH_TOKEN, token);
};

const setOrg = (org_id: string) => {
  storage.setString(ORG_REGISTER, org_id);
};

const getAccessToken = () => {
  return storage.getString(AUTH_TOKEN);
};

const getOrg = () => {
  return storage.getString(ORG_REGISTER);
};

const removeAccessToken = () => {
  storage.removeItem(AUTH_TOKEN);
};

const removeOrg = () => {
  storage.removeItem(ORG_REGISTER);
};

const localStorage = {
  setAccessToken,
  setOrg,
  getAccessToken,
  getOrg,
  removeAccessToken,
  removeOrg,
};

export default localStorage;
