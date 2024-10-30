
import { TurboModule, TurboModuleRegistry } from "react-native";





export interface Spec extends TurboModule {
    getBatteryState(): string;
    getDeviceModule(): string;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
    'NativeDeviceInfo',
) as Spec;
