//
//  RCTNativeDeviceInfo.m
//  newArchitectureRN
//
//  Created by Malik Chohra on 30.10.24.
//

#import "RCTNativeDeviceInfoTest.h"

// Interface declaration for RCTNativeDeviceInfoTest
@interface RCTNativeDeviceInfoTest()
@end

// Implementation of RCTNativeDeviceInfoTest
@implementation RCTNativeDeviceInfoTest

// Macro to export the module to React Native
RCT_EXPORT_MODULE(NativeDeviceInfoTest)

// Initializer method
- (instancetype)init {
  self = [super init];
  if (self) {
    // Initialize any properties or perform setup tasks here
  }
  return self;
}

// Method to get the battery state as a string
- (NSString *)getBatteryState {
  UIDevice *device = [UIDevice currentDevice]; // Get the current device
  device.batteryMonitoringEnabled = YES; // Enable battery monitoring
  
  int state = [device batteryState]; // Get the battery state
  double batLeft = (float)[device batteryLevel] * 100; // Calculate battery level percentage

  return [NSString stringWithFormat:@"%f", batLeft]; // Return battery level as a string
}

// Method to get the device model and system version
- (NSString *)getDeviceModule {
  UIDevice *device = [UIDevice currentDevice]; // Get the current device
  NSString *deviceModel = device.model; // Get the device model
  
  // Append system version to the device model
  if ([deviceModel isEqualToString:@"iPhone"]) {
    deviceModel = [NSString stringWithFormat:@"%@ %@", deviceModel, device.systemVersion];
  } else if ([deviceModel isEqualToString:@"iPad"]) {
    deviceModel = [NSString stringWithFormat:@"%@ %@", deviceModel, device.systemVersion];
  } else if ([deviceModel isEqualToString:@"iPod touch"]) {
    deviceModel = [NSString stringWithFormat:@"%@ %@", deviceModel, device.systemVersion];
  } else {
    deviceModel = [NSString stringWithFormat:@"%@ %@", deviceModel, device.systemVersion];
  }
  return deviceModel; // Return the device model with system version
}

// Method to get a TurboModule instance
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeDeviceInfoTestSpecJSI>(params); // Return a shared pointer to a TurboModule
}

@end
