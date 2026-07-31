import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor="#22C7D6"
      labelStyle={{ selected: { color: "#22C7D6" } }}
    >

      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Voyora</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

    </NativeTabs>
  );
}