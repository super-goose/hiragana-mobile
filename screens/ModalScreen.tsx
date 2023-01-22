import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { Platform, StyleSheet, TextInput, ToastAndroid } from 'react-native';
import { Hint } from '../components/Hint';

import { Text, View } from '../components/Themed';
import { ModalProps } from '../types';
import { Colors } from '../ui/Colors';
import { Input } from '../ui/Input';

type IParams = { kana: string, romaji: string };

export default function ModalScreen({ route }: ModalProps) {
  const { kana, romaji, onReturn } = route?.params ?? { kana: '', romaji: '' };
  const [guess, setGuess] = useState<string>('');
  const navigation = useNavigation();

  const [attempts, setAttempts] = useState<string[]>([]);

  useEffect(() => {
    const showToastWithGravity = () => {
      ToastAndroid.showWithGravity(
        'Only toast over the keyboard??',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    };
    showToastWithGravity()
  }, []);

  const onChange = useCallback((value: string) => {
    setGuess(value);
  }, [setGuess]);

  useEffect(() => {
    let gto = setTimeout(() => {
      if (guess !== '') {
        const newAttempts = [...attempts, guess];

        if (guess === kana) {
          // tell the user they were correct
          onReturn(newAttempts.length);
          navigation.goBack();
        } else {
          setAttempts(newAttempts);
          setGuess('');
        }
      }
    }, 3000);
    return () => clearTimeout(gto);
  }, [guess, setGuess, onReturn, attempts, setAttempts, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{romaji}</Text>
      <Input value={guess} onChange={onChange} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Hint answer={kana} guessed={attempts} />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.GREEN,
    fontSize: 40,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
