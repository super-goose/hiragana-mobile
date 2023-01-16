import React, { PropsWithChildren } from 'react';
import { View, Text } from 'react-native';

const Cell: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={{ flex: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: 'black' }}>
      <Text style={{ color: 'white' }}>
        {children}
      </Text>
    </View>
  );
}

export const Row: React.FC = () => {
  return (
    <View>
      <View>

      </View>
    </View>
  );
}

type HeaderProps = {
  elements: string[];
}
export const Header: React.FC<HeaderProps> = ({ elements }) => {
  return (
    <View style={{ width: '100%', flexDirection: 'row' }}>
      <Cell />
      {elements.map((e) => <Cell>{e}</Cell>)}
    </View>
  );
}
