import React from 'react';
import { View } from '../Themed';
import { Header } from './Row';

export const Table: React.FC = () => {
  return (
    <View style={{ borderColor: 'white', borderWidth: 1 }}>
      <Header elements={['a', 'i', 'u', 'e', 'o']} />

    </View>
  );
}