import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Switch, TouchableOpacity } from 'react-native';

import { QuizCell } from '../components/QuizCell';
import { RefCell } from '../components/RefCell';
import { Table } from '../components/Table';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { RowBox } from '../ui/RowBox';
import { TextBlockMd } from '../ui/TextBlock';
import { k } from '../utils/katakana';

export default function TabThreeScreen({ navigation }: RootTabScreenProps<'TabThree'>) {
  const [referenceMode, setReferenceMode] = useState<boolean>(false);
  // useEffect(() => {
  //   Keyboard
  // }, []);

  const presentation = useCallback((key: string, kana: string) => {
    if (referenceMode) {
      return (<RefCell romaji={key} kana={kana} />);
    }
    return (<QuizCell romaji={key} kana={kana} />);
  }, [referenceMode]);

  return (
    <View style={styles.container}>
      <RowBox>
        <TextBlockMd>quiz</TextBlockMd>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={referenceMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setReferenceMode(!referenceMode)}
          value={referenceMode}
        />
        <TextBlockMd>reference</TextBlockMd>
      </RowBox>
      <Table kana={k} presentation={presentation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
