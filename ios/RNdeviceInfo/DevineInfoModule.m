//
//  DevineInfoModule.m
//  newArchitectureRN
//
//  Created by Malik Chohra on 30.10.24.
//

#import "DevineInfoModule.h"

@implementation DevineInfoModule
RCT_EXPORT_MODULE(DevineInfoModule)

- (NSString * _Nullable)getBatteryState:(NSString *)key {
//  UIDevice *device = [UIDevice currentDevice];
//  [device setBatteryMonitoringEnabled:YES];
//  float batteryLevel = [device batteryLevel];
  return @"20";
}
- (NSString * _Nullable)getDeviceModule:(NSString *)key {
  
//  return [UIDevice currentDevice].model;
  return @"30asdwqe";
}

@end
