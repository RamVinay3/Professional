
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './ReusableComponents/Button';
import TextInputIcon from './ReusableComponents/TextInputIcon';
import SafeView from './ReusableComponents/SafeView';
import Login from './src/Login';

export default function App() {
  return (
    <SafeView>
      <Login/>

    {/* <Text>vinay</Text> */}
    </SafeView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
