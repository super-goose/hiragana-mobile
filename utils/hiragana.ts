import { getObjectValues } from "./getObjectValues";

type t = {
  [key: string]: string;
}

const hiragana: t = {
  nill: '∅',
  a: 'あ',
  i: 'い',
  u: 'う',
  e: 'え',
  o: 'お',

  ka: 'か',
  ki: 'き',
  ku: 'く',
  ke: 'け',
  ko: 'こ',

  sa: 'さ',
  si: 'し',
  su: 'す',
  se: 'せ',
  so: 'そ',

  ta: 'た',
  ti: 'ち',
  tu: 'つ',
  te: 'て',
  to: 'と',

  na: 'な',
  ni: 'に',
  nu: 'ぬ',
  ne: 'ね',
  no: 'の',

  ha: 'は',
  hi: 'ひ',
  hu: 'ふ',
  he: 'へ',
  ho: 'ほ',

  ma: 'ま',
  mi: 'み',
  mu: 'む',
  me: 'め',
  mo: 'も',

  ya: 'や',
  yu: 'ゆ',
  yo: 'よ',

  ra: 'ら',
  ri: 'り',
  ru: 'る',
  re: 'れ',
  ro: 'ろ',

  wa: 'わ',
  wi: 'ゐ',
  we: 'ゑ',
  wo: 'を',

  n: 'ん',
};

const diacritics = {
  sokuon: 'っ',
  iteration: 'ゝ',
  dakuten: [
    '゛',
    '゜',
  ],
}

export const h = (key: string): string => hiragana[key] ?? key;

export const transform = (transformer: (key: string, hir: string) => any) => {
  return Object.keys(hiragana).reduce((acc, cur) => {
    return {
      ...acc,
      [cur]: transformer(cur, hiragana[cur]),
    }
  }, {})
};
export const hiraganaList = getObjectValues(hiragana);
export const isHiragana = (kana: string) => getObjectValues(hiragana).includes(kana)