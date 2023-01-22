import React, { useMemo } from "react";
import { Colors } from "../ui/Colors";
import { RowBox } from "../ui/RowBox"
import { TextBlockLg } from "../ui/TextBlock";
import { getN, shuffle } from "../utils/arrayMagic";
import { getObjectValues } from "../utils/getObjectValues";
import { hiraganaList, isHiragana } from "../utils/hiragana";
import { isKatakana, katakanaList } from "../utils/katakana";

type IProps = {
  answer: string;
  guessed: string[];
};

export const Hint: React.FC<IProps> = ({ answer, guessed = [] }) => {
  const {
    answerIsKana,
    hints
  } = useMemo(() => {
    const answerIsHiragana = isHiragana(answer);
    const answerIsKatakana = isKatakana(answer);
    let hints: string[] = []

    if (answerIsHiragana) {
      hints = shuffle([...getN(hiraganaList, 4, [answer]), answer]);
    }

    if (answerIsKatakana) {
      hints = shuffle([...getN(katakanaList, 4, [answer]), answer]);
    }

    return {
      answerIsKana: answerIsHiragana || answerIsKatakana,
      hints
    }
  }, [answer]);

  if (!answerIsKana) {
    return (
      <RowBox>
        <TextBlockLg>{`Character: "${answer}" not found`}</TextBlockLg>
      </RowBox>
    )
  }

  return (
    <RowBox>
      {hints.map((hint) => (
        <TextBlockLg color={guessed.includes(hint) ? Colors.BACKGROUND : undefined} key={`hint-${hint}-for-${answer}`}>{hint}</TextBlockLg>
      ))}
    </RowBox>
  );
};