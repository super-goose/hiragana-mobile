import React from 'react';
import { Colors } from '../../ui/Colors';
import { View } from '../Themed';
import { Header, Row } from './Row';

const chart = [
  ['a', 'i', 'u', 'e', 'o'],
  ['ka', 'ki', 'ku', 'ke', 'ko'],
  ['sa', 'si', 'su', 'se', 'so'],
  ['ta', 'ti', 'tu', 'te', 'to'],
  ['na', 'ni', 'nu', 'ne', 'no'],
  ['ha', 'hi', 'hu', 'he', 'ho'],
  ['ma', 'mi', 'mu', 'me', 'mo'],
  ['ya', ' ', 'yu', ' ', 'yo'],
  ['ra', 'ri', 'ru', 're', 'ro'],
  ['wa', ' ', ' ', ' ', 'wo'],
];

type TTableProps = {
  presentation: (key: string, hir: string) => any;
  kana: (key: string) => string;
}

export const Table: React.FC<TTableProps> = ({ presentation, kana }) => {
  return (
    <View style={{ borderColor: Colors.BLUE, borderWidth: 1, width: '90%' }}>
      {/* <Header elements={['a', 'i', 'u', 'e', 'o']} /> */}
      {chart.map((elements) => {
        return (
          <Row key={elements.join('')} elements={elements.map((e) => presentation(e, kana(e)))} />
        )
      })}
      <Row elements={[presentation('n', kana('n'))]} />
    </View>
  );
}

/*
const chart = [
  ['∅', 'a', 'i', 'u', 'e', 'o'],
  ['k', 'ka', 'ki', 'ku', 'ke', 'ko'],
  ['s', 'sa', 'si', 'su', 'se', 'so'],
  ['t', 'ta', 'ti', 'tu', 'te', 'to'],
  ['n', 'na', 'ni', 'nu', 'ne', 'no'],
  ['h', 'ha', 'hi', 'hu', 'he', 'ho'],
  ['m', 'ma', 'mi', 'mu', 'me', 'mo'],
  ['y', 'ya', ' ', 'yu', ' ', 'yo'],
  ['r', 'ra', 'ri', 'ru', 're', 'ro'],
  ['w', 'wa', ' ', ' ', ' ', 'wo'],
];

 */