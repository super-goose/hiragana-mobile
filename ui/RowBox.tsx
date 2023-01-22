import React, { PropsWithChildren } from "react";
import { View } from "../components/Themed";

export const RowBox: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-around' }}>
      {children}
    </View>
  )
}