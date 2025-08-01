import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Registra manualmente as telas da pasta /tabs */}
      <Stack.Screen name="tabs/index" />
      <Stack.Screen name="tabs/register" />
      <Stack.Screen name="tabs/contratarRegister" />
      <Stack.Screen name="tabs/freelancerRegister" />
    </Stack>
  );
}
