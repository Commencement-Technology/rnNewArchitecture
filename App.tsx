/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import NativeDeviceInfoTest from './specs/NativeDeviceInfoTest';

const EMPTY = '<empty>';
function App(): React.JSX.Element {
  const [batteryState, setBatteryState] = React.useState<string | null>(null);
  const [deviceModel, setDeviceModel] = React.useState<string | null>(null);

  React.useEffect(() => {
    try {
      const nativeBatteryValue =
        NativeDeviceInfoTest?.getBatteryState() ?? EMPTY;
      const nativeDeviceModel =
        NativeDeviceInfoTest?.getDeviceModule() ?? EMPTY;

      setBatteryState(nativeBatteryValue);
      setDeviceModel(nativeDeviceModel);
    } catch (e) {
      console.error(e);
    }
  }, []);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={styles.sectionTitle}>Battery State</Text>
      <Text style={styles.sectionDescription}>{batteryState ?? EMPTY}</Text>
      <Text style={styles.sectionTitle}>Device Model</Text>
      <Text style={styles.sectionDescription}>{deviceModel ?? EMPTY}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
