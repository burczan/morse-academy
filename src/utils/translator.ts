import { MORSE_CODE } from './morseCode';

const characterBreak = ' ';
const wordBreak = '   ';

export const decodeMorse = (morseCode: string) => {
  const decodeWord = (word: string) => {
    return word.split(characterBreak).map((code) => MORSE_CODE[code]).join('');
  };

  return morseCode
    .trim()
    .split(wordBreak)
    .map(decodeWord)
    .join(characterBreak);
};

export const encodeMorse = (string: string) => {
  const encodeWord = (word: string) => {
    return word.split('').map((char) => MORSE_CODE[char.toUpperCase()]).join(characterBreak);
  };

  return string
    .split(characterBreak)
    .map(encodeWord)
    .join(wordBreak);
};
