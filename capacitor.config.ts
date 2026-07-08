import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.animato.adams',
  appName: 'Adams',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    url: 'https://albertduomotimi778-byte.github.io/adams/',
    allowNavigation: [
      'albertduomotimi778-byte.github.io',
      '*.github.io',
      '*.run.app'
    ]
  }
};

export default config;
