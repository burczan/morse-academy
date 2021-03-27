import { reverseMapping } from '../common/helpers/utils/reverseMapping';

type CodeMap = { [key: string]: string };

export type CodeArray = [string, string][];

export const FROM_MORSE_LETTERS: CodeMap = Object.freeze({
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
});

export const FROM_MORSE_LETTERS_ARRAY: CodeArray = Object.entries(FROM_MORSE_LETTERS);

export const FROM_MORSE_NUMBERS: CodeMap = Object.freeze({
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
});

export const FROM_MORSE_NUMBERS_ARRAY: CodeArray = Object.entries(FROM_MORSE_NUMBERS);

export const FROM_MORSE_SPECIAL_COMMANDS: CodeMap = Object.freeze({
  '...---...': 'SOS',
});

// eslint-disable-next-line max-len
export const FROM_MORSE_SPECIAL_COMMANDS_ARRAY: CodeArray = Object.entries(FROM_MORSE_SPECIAL_COMMANDS);

export const FROM_MORSE: CodeMap = Object.freeze({
  ...FROM_MORSE_LETTERS,
  ...FROM_MORSE_NUMBERS,
  ...FROM_MORSE_SPECIAL_COMMANDS,
});

export const FROM_MORSE_ARRAY: CodeArray = Object.entries(FROM_MORSE);

export const TO_MORSE: CodeMap = Object.freeze(reverseMapping(FROM_MORSE));

export const MORSE_CODE: CodeMap = Object.freeze({ ...FROM_MORSE, ...TO_MORSE });

export const MORSE_CODE_ARRAY: CodeArray = Object.entries(MORSE_CODE);
