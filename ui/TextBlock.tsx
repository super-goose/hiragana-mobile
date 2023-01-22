import { PropsWithChildren } from "react";
import { Text, View } from "react-native";
import { Colors } from "./Colors";

const TextBlock: React.FC<{ children: string, fontSize: number, color: string }> = ({ children, fontSize, color }) => (
  <View style={{}}>
    <Text style={{ fontSize, color, textAlign: 'center' }}>
      {children}
    </Text>
  </View>
);

export const TextBlockSm: React.FC<{ children: string, color?: string }> = ({ children, color = Colors.WHITE }) => (
  <TextBlock fontSize={8} color={color} children={children} />
);

export const TextBlockMd: React.FC<{ children: string, color?: string }> = ({ children, color = Colors.WHITE }) => (
  <TextBlock fontSize={14} color={color} children={children} />
);

export const TextBlockLg: React.FC<{ children: string, color?: string }> = ({ children, color = Colors.WHITE }) => (
  <TextBlock fontSize={24} color={color} children={children} />
);
