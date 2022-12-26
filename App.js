import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { SafeAreaView, StatusBar } from 'react-native';
import mock from './src/mocks/cesta';
import Cesta from './src/telas/cesta';

export default function App() {
  const [fontCarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold
  })

  if(!fontCarregada) {
    return <AppLoading />
  }
  
  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar/>
      <Cesta {...mock}></Cesta>
    </SafeAreaView>
  );
}
