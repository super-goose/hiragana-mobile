import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { TextBlockLg, TextBlockMd, TextBlockSm } from '../ui/TextBlock';
import { Cell } from './Table';

export const RefCell = ({ romaji, kana }: { romaji: string, kana: string }) => {
  const [hint, setHint] = useState(false);
  return hint ? (
    <Cell onPress={() => setHint(!hint)}>
      <TextBlockMd>
        {kana}
      </TextBlockMd>
      <TextBlockSm>
        {romaji}
      </TextBlockSm>
    </Cell>
  ) : (
    <Cell onPress={() => setHint(!hint)}>
      <TextBlockLg>
        {kana}
      </TextBlockLg>
    </Cell>
  );
}
