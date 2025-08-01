import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // oculta o header padrão em todas as telas, opcional
      }}
    >
      {/* Registra as telas disponíveis automaticamente */}
      {/* 
        - (tabs)/index.tsx é a rota '/'
        - (tabs)/register.tsx é a rota '/register'
      */}
    </Stack>
  );
}
