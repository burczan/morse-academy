import React from 'react';
import { Column, Columns } from '../../common/components/Layout';
import { Tile } from './Tile';
import { chunkArray } from '../../common/utils/helpers';
import { FROM_MORSE } from '../../utils/morseCode';

export const MorseCode = () => {
  const chunked = chunkArray(Object.entries(FROM_MORSE), 3);

  return (
    <div className="container">
      {chunked.map((chunk) => {
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
      })}
    </div>
  );
};
