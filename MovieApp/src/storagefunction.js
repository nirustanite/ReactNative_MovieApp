import AsyncStorage from '@react-native-community/async-storage';

// async function to store the token in the app storage
export const storeData = async (token) => {
  try {
    await AsyncStorage.setItem('accesstoken', token);
  } catch (error) {
    console.error(error)
  }
};

//clear data in app storage
export const clearData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error(error)
  }
};