import React, { PropsWithChildren } from "react";
import { TouchableOpacity } from "react-native"
import { Colors } from "../../ui/Colors";
import { View } from "../Themed";

interface IProps {
  onPress: () => void
}

export const Cell: React.FC<PropsWithChildren & IProps> = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ borderRightWidth: 1, borderBottomWidth: 1, borderColor: Colors.BLUE, paddingBottom: 5, height: 55 }}>
        {children}
      </View>
    </TouchableOpacity>
  );
}