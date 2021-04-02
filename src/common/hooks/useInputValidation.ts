import { useEffect, useRef, useState } from 'react';
import { Ref, SetState } from '../helpers/utils/types';

type AllowedHtmlElements =
  | HTMLButtonElement
  | HTMLInputElement
  | HTMLOutputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

type ValidationConfig<HtmlElement> = {
  inputRef: Ref<HtmlElement>;
  isInputValid: boolean;
  setIsInputValid: SetState<boolean>;
  error: string;
  setError: SetState<string>;
};

export const useInputValidation = <HtmlElement extends AllowedHtmlElements>(
  value: string,
): ValidationConfig<HtmlElement> => {
  const inputRef = useRef<HtmlElement>(null);
  const [isInputValid, setIsInputValid] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (inputRef.current?.checkValidity()) {
      setIsInputValid(true);
    }
  }, [value]);

  useEffect(() => {
    if (error.length > 0) {
      setIsInputValid(false);
    }
  }, [error]);

  return {
    inputRef,
    isInputValid,
    setIsInputValid,
    error,
    setError,
  };
};
