import { getObjectValues } from "./getObjectValues";

type t = {
  [key: string]: string;
}

export const katakana: t = {
  a: 'ア', i: 'イ', u: 'ウ', e: 'エ', o: 'オ',
  ka: 'カ', ki: 'キ', ku: 'ク', ke: 'ケ', ko: 'コ',
  sa: 'サ', si: 'シ', su: 'ス', se: 'セ', so: 'ソ',
  ta: 'タ', ti: 'チ', tu: 'ツ', te: 'テ', to: 'ト',
  na: 'ナ', ni: 'ニ', nu: 'ヌ', ne: 'ネ', no: 'ノ',
  ha: 'ハ', hi: 'ヒ', hu: 'フ', he: 'ヘ', ho: 'ホ',
  ma: 'マ', mi: 'ミ', mu: 'ム', me: 'メ', mo: 'モ',
  ya: 'ヤ', yu: 'ユ', yo: 'ヨ',
  ra: 'ラ', ri: 'リ', ru: 'ル', re: 'レ', ro: 'ロ',
  wa: 'ワ', wi: 'ヰ', we: 'ヱ', wo: 'ヲ',
  n: 'ン',
}

export const k = (key: string): string => katakana[key] ?? key;
export const katakanaList = getObjectValues(katakana);
export const isKatakana = (kana: string) => getObjectValues(katakana).includes(kana)