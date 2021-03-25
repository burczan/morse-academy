import React, { useEffect, useMemo, useState } from 'react';
import { Column, Columns } from '../../common/components/Layout';
import { Textarea } from '../../common/components/Forms';
import { ButtonSwitch, SwitchConfig } from '../../common/components/ButtonSwitch';
import { Message } from '../../common/components/Message';
import { MorseCodeFormatter } from './MorseCodeFormatter';
import { decodeMorse, encodeMorse } from '../../utils/translator';

type Mode = 'encode' | 'decode';

type ModeConfig = SwitchConfig & {
  [key: string]: {
    placeholder: string;
  }
};

export const Translator = () => {
  const [currentMode, setCurrentMode] = useState<Mode>('encode');
  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');
  const modeConfig: ModeConfig = useMemo(() => {
    return {
      encode: {
        placeholder: 'SOS',
        buttonText: 'Encode',
        value: 'encode' as Mode,
        setValue: () => setCurrentMode('encode'),
      },
      decode: {
        placeholder: '... --- ...',
        buttonText: 'Decode',
        value: 'decode' as Mode,
        setValue: () => setCurrentMode('decode'),
      },
    };
  }, []);
  const [placeholder, setPlaceholder] = useState(modeConfig.encode.placeholder);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let result = '';
    switch (currentMode) {
      case 'encode':
        result = encodeMorse(event.target.value);
        break;
      case 'decode':
        result = decodeMorse(event.target.value);
        break;
    }
    setValue(event.target.value);
    setOutput(result);
  };

  useEffect(() => {
    setValue('');
    setOutput('');
    setPlaceholder(modeConfig[currentMode].placeholder);
  }, [currentMode, modeConfig]);

  return (
    <div className="container">
      <p className="title is-1">Morse code translator</p>
      <ButtonSwitch currentValue={currentMode} config={modeConfig} selectedColor="is-info" />
      <Columns>
        <Column size="is-one-third">
          <Textarea
            name="converter"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        </Column>
        <Column>
          <Message header="Output" color="is-info">
            <MorseCodeFormatter>{output}</MorseCodeFormatter>
          </Message>
        </Column>
      </Columns>
    </div>
  );
};
