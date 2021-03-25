import React from 'react';
import { Button } from '../Button';
import { Color } from '../types';

export type SwitchConfig = {
  [key: string]: {
    buttonText: string;
    value: string;
    setValue: () => void;
  }
};

type ButtonSwitchProps = {
  currentValue: string;
  config: SwitchConfig;
  selectedColor?: Color;
};

export const ButtonSwitch = ({
  currentValue,
  config,
  selectedColor = 'is-success',
}: ButtonSwitchProps) => {
  const selectedClassName = `${selectedColor} is-selected`;

  return (
    <div className="buttons has-addons are-large">
      {Object.keys(config).map((key) => {
        return (
          <Button
            key={key}
            className={currentValue === config[key].value ? selectedClassName : undefined}
            onClick={(config[key].setValue)}
          >
            {config[key].buttonText}
          </Button>
        );
      })}
    </div>
  );
};
