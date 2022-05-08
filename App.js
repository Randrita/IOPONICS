import { StyleSheet, Text, View,StatusBar } from 'react-native';
import * as Application from 'expo-application';



import Page from "./components/Page.js";
function App() {
  return (
    <View style={styles.container}>
      <Page/>
     </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
  },
});

