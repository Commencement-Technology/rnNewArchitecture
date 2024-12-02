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

// Constant for empty/null value display
const EMPTY = '<empty>';

function App(): React.JSX.Element {
  // State hooks for storing device information
  const [batteryState, setBatteryState] = React.useState<string | null>(null);
  const [deviceModel, setDeviceModel] = React.useState<string | null>(null);

  // Effect hook to fetch device information when component mounts
  React.useEffect(() => {
    try {
      // Get battery state and device model from native module
      // Use optional chaining (?.) and nullish coalescing (??) for safety
      const nativeBatteryValue =
        NativeDeviceInfoTest?.getBatteryState() ?? EMPTY;
      const nativeDeviceModel =
        NativeDeviceInfoTest?.getDeviceModule() ?? EMPTY;

      // Update state with fetched values
      setBatteryState(nativeBatteryValue);
      setDeviceModel(nativeDeviceModel);
    } catch (e) {
      console.error(e);
    }
  }, []); // Empty dependency array means this runs once on mount

  // Determine if device is in dark mode
  const isDarkMode = useColorScheme() === 'dark';

  // Set background style based on color scheme
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* Status bar adapts to dark/light mode */}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* Display battery state */}
      <Text style={styles.sectionTitle}>Battery State</Text>
      <Text style={styles.sectionDescription}>{batteryState ?? EMPTY}</Text>
      {/* Display device model */}
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
