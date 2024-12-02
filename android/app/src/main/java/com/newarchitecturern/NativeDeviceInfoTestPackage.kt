package com.newarchitecturern

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeDeviceInfoTestPackage : TurboReactPackage() {

  // Returns a NativeModule instance based on the requested module name
  // If the name matches our module, return a new instance; otherwise return null
  override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? =
    if (name == NativeDeviceInfoTestModule.NAME) {
      NativeDeviceInfoTestModule(reactContext)
      
    } else {
      null
    }

  // Provides metadata about the native module to the React Native runtime
  // This information helps React Native understand how to interact with our module
  override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
    mapOf(
      NativeDeviceInfoTestModule.NAME to ReactModuleInfo(
        _name = NativeDeviceInfoTestModule.NAME,          // Module name for identification
        _className = NativeDeviceInfoTestModule.NAME,     // Class name of the module
        _canOverrideExistingModule = false,              // Whether this module can be overridden
        _needsEagerInit = false,                         // Whether to initialize at startup
        isCxxModule = false,                             // Not a C++ module
        isTurboModule = true                             // Uses the TurboModules architecture
      )
    )
  }
}
