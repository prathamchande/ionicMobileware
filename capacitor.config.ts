import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.test.mobileware',
  appName: 'mobileware',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
