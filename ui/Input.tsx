import React from "react";
import { TextInput, View } from "react-native";
import { Colors } from "./Colors";

type IProps = {
  onChange: (value: string) => void;
  value: string;
}

export const Input: React.FC<IProps> = ({ onChange, value }) => {
  return (
    <View style={{ width: '100%', backgroundColor: '#333', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
      <TextInput
        onChangeText={onChange}
        autoFocus={true}
        value={value}
        style={{ color: Colors.WHITE, fontSize: 24, backgroundColor: '#666', width: '80%', borderRadius: 4, padding: 8 }}
        placeholder="what is this?"
        placeholderTextColor="#333"
        // caretColor="#444"
        textAlign="center"
        autoCorrect={false}
      />
    </View>
  )
};