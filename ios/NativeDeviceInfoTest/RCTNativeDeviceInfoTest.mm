//
//  RCTNativeDeviceInfo.m
//  newArchitectureRN
//
//  Created by Malik Chohra on 30.10.24.
//

#import "RCTNativeDeviceInfoTest.h"

// Interface declaration - can be used to declare private properties and methods
@interface RCTNativeDeviceInfoTest()
@end

// Implementation of RCTNativeDeviceInfoTest
@implementation RCTNativeDeviceInfoTest

// Register this class as a native module with React Native
// The name 'NativeDeviceInfoTest' will be used to reference this module in JavaScript
RCT_EXPORT_MODULE(NativeDeviceInfoTest)

// Initialize the module
// This is called when the module is first created
- (instancetype)init {
  self = [super init];
  if (self) {
    // Any initialization code would go here
    // Currently empty as we don't need special initialization
  }
  return self;
}

// Get the current battery level as a percentage
// Returns: String representation of battery level (0-100)
- (NSString *)getBatteryState {
  UIDevice *device = [UIDevice currentDevice];
  device.batteryMonitoringEnabled = YES;  // Must be enabled to get battery info
  
  int state = [device batteryState];      // Get current battery state (charging/unplugged/full)
  double batLeft = (float)[device batteryLevel] * 100;  // Convert battery level to percentage

  return [NSString stringWithFormat:@"%f", batLeft];
}

// Get device model and iOS version information
// Returns: String in format "<device type> <iOS version>"
- (NSString *)getDeviceModule {
  UIDevice *device = [UIDevice currentDevice];
  NSString *deviceModel = device.model;  // Get device type (iPhone/iPad/iPod)
  
  // Append iOS version to device model
  // Note: This could be simplified since all cases do the same thing,
  // but keeping the structure for potential future device-specific handling
  if ([deviceModel isEqualToString:@"iPhone"]) {
    deviceModel = [NSString stringWithFormat:@"%@ %@", deviceModel, device.systemVersion];
  } else if ([deviceModel isEqualToString:@"iPad"]) {
    deviceModel = [NSString stringWithFormat:@"%@ %@", deviceModel, device.systemVersion];
  } else if ([deviceModel isEqualToString:@"iPod touch"]) {
    deviceModel = [NSString stringWithFormat:@"%@ %@", deviceModel, device.systemVersion];
  } else {
    deviceModel = [NSString stringWithFormat:@"%@ %@", deviceModel, device.systemVersion];
  }
  return deviceModel;
}

// Required for New Architecture (TurboModules)
// Creates and returns a C++ TurboModule instance for this native module
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeDeviceInfoTestSpecJSI>(params);
}

@end
