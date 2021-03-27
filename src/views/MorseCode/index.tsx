import React from 'react';
import { Column, Columns } from '../../common/components/Layout';
import { Tile } from './Tile';
import { chunkArray } from '../../common/helpers/utils/chunkArray';
import {
  FROM_MORSE_ARRAY,
  FROM_MORSE_LETTERS_ARRAY,
  FROM_MORSE_NUMBERS_ARRAY,
  FROM_MORSE_SPECIAL_COMMANDS_ARRAY,
  CodeArray,
} from '../../utils/morseCode';
import { Tabs } from '../../common/components/Tabs';

export const MorseCode = () => {
  const size = 3;
  const all = chunkArray(FROM_MORSE_ARRAY, size) as CodeArray[];
  const letters = chunkArray(FROM_MORSE_LETTERS_ARRAY, size) as CodeArray[];
  const numbers = chunkArray(FROM_MORSE_NUMBERS_ARRAY, size) as CodeArray[];
  const specialCommands = chunkArray(FROM_MORSE_SPECIAL_COMMANDS_ARRAY, size) as CodeArray[];

  function chunkedCodeTiles<Arr extends CodeArray[]>(array: Arr) {
    return array.map((chunk) => {
      return (
        <Columns key={`row-${chunk}`}>
          {chunk.map(([key, char]) => {
            return (
              <Column key={key} size="is-one-third">
                <Tile key={key} title={key} subtitle={char} />
              </Column>
            );
          })}
        </Columns>
      );
    });
  }

  const tabs = [
    {
      label: 'All',
      children: chunkedCodeTiles(all),
    },
    {
      label: 'Letters',
      children: chunkedCodeTiles(letters),
    },
    {
      label: 'Numbers',
      children: chunkedCodeTiles(numbers),
    },
    {
      label: 'Special commands',
      children: chunkedCodeTiles(specialCommands),
    },
  ];

  return (
    <div className="container">
      <Tabs alignment="is-centered" size="is-medium">{tabs}</Tabs>
    </div>
  );
};
