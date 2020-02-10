import AsyncStorage from '@react-native-community/async-storage';

// async fiunction to store the token in the app storage
export const storeData = async (token) => {
  try {
    await AsyncStorage.setItem('accesstoken', token);
  } catch (error) {
    console.error(error)
  }
};