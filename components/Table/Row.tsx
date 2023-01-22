import React, { PropsWithChildren } from 'react';
import { View, Text } from 'react-native';

const Cell: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={{ flex: 1, alignSelf: 'stretch' }}>
      {children}
    </View>
  );
}

type TRowProps = {
  elements: string[];
}

export const Row: React.FC<TRowProps> = ({ elements }) => {
  return (
    <View style={{ width: '100%', flexDirection: 'row', height: 55 }}>
      {elements.map((e) => <Cell key={`-${Math.floor(Math.random() * 10000000)}`}>{e}</Cell>)}
    </View>
  );
}

export const Header: React.FC<TRowProps> = ({ elements }) => {
  return (
    <Row elements={[' ', ...elements]} />
  );
}
