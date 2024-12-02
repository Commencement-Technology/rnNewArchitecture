package com.newarchitecturern

import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.content.SharedPreferences
import android.os.BatteryManager
import com.newarchitecturern.NativeDeviceInfoTestSpec
import com.facebook.react.bridge.ReactApplicationContext


class NativeDeviceInfoTestModule(reactContext: ReactApplicationContext) : NativeDeviceInfoTestSpec(reactContext) {

  override fun getName() = NAME

  override fun getBatteryState():String {
    
     val batteryStatus: Intent? = IntentFilter(Intent.ACTION_BATTERY_CHANGED).let { ifilter ->
         getReactApplicationContext().registerReceiver(null, ifilter)
     }
      val level: Int = batteryStatus?.getIntExtra(BatteryManager.EXTRA_LEVEL, -1) ?: -1
     val scale: Int = batteryStatus?.getIntExtra(BatteryManager.EXTRA_SCALE, -1) ?: -1

    val batteryPct: Float = level / scale.toFloat()
    return (batteryPct * 100).toInt().toString()
}

override fun getDeviceModule(): String {
    val deviceName = android.os.Build.MODEL
    val deviceModel = android.os.Build.MANUFACTURER + " " + deviceName
    return deviceModel
}



companion object {
    const val NAME = "NativeDeviceInfoTest"
  }
}
