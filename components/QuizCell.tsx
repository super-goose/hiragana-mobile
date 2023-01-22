import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { Colors } from '../ui/Colors';
import { TextBlockLg } from '../ui/TextBlock';
import { Cell } from './Table';

interface IProps { romaji: string, kana: string }

export const QuizCell = ({ romaji, kana }: IProps) => {
  // const [hint, setHint] = useState(false);
  const navigation = useNavigation();
  const [which, setWhich] = useState<'kana' | 'romaji'>('romaji');
  const [attempts, setAttempts] = useState(0)

  const onReturn = useCallback((tries: number) => {
    setAttempts(tries);
    setWhich('kana');
  }, [setAttempts, setWhich]);

  const displayModal = useCallback(() => {
    if (kana && kana !== ' ') {
      navigation.navigate('Modal', {
        kana, romaji, onReturn
      });
    }
  }, [navigation]);

  const toDisplay = { kana, romaji }[which];
  const color = [Colors.GREEN, Colors.WHITE, Colors.YELLOW, Colors.YELLOW, Colors.ORANGE, Colors.PINK]?.[attempts] ?? Colors.PINK;
  // navigation.navigate('Modal')
  return (
    <Cell onPress={displayModal}>
      <TextBlockLg color={color}>
        {toDisplay}
      </TextBlockLg>
    </Cell>
  );
}
