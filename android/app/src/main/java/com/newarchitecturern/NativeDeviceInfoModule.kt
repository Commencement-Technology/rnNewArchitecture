package com.newarchitecturern

import android.content.Context
import android.content.SharedPreferences
import com.newarchitecturern.NativeDeviceInfoSpec
import com.facebook.react.bridge.ReactApplicationContext

class NativeDeviceInfoModule(reactContext: ReactApplicationContext) : NativeDeviceInfoSpec(reactContext) {

  override fun getName() = NAME

  override fun getBatteryState():String {
    return "20"

}

override fun getDeviceModule(): String {
    return "Android"
}



companion object {
    const val NAME = "NativeDeviceInfo"
  }
}
