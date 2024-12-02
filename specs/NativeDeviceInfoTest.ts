// Import necessary types from React Native's TurboModule system
import { TurboModule, TurboModuleRegistry } from "react-native";

// Define the interface for our native module
// This interface extends TurboModule and specifies the contract between JS and native code
export interface Spec extends TurboModule {
    // Method to get the battery state
    // Returns a string representing battery level percentage
    getBatteryState(): string;

    // Method to get device model information
    // Returns a string containing device model and OS version
    getDeviceModule(): string;
}

// Register and export the native module using TurboModuleRegistry
// 'getEnforcing' ensures the module exists at runtime or throws an error
// The type assertion 'as Spec' ensures TypeScript recognizes the correct interface
export default TurboModuleRegistry.getEnforcing<Spec>(
    'NativeDeviceInfoTest',
) as Spec;
