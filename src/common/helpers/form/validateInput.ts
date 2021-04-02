export type CustomInputValidationRules = {
  [inputName: string]: {
    condition: boolean;
    errorMessage: string;
  }[]
};

type AllowedHtmlElements =
  | HTMLButtonElement
  | HTMLInputElement
  | HTMLOutputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

type ValidityKey = keyof ValidityState;

const validityKeys: ValidityKey[] = [
  'badInput',
  'patternMismatch',
  'rangeOverflow',
  'rangeUnderflow',
  'stepMismatch',
  'tooLong',
  'tooShort',
  'typeMismatch',
  'valueMissing',
];

export const isError = (error: string) => {
  return error.length > 0;
};

export const validateInput = (
  input: AllowedHtmlElements,
  customValidationRules: CustomInputValidationRules,
): string => {
  let errorMessage = '';

  customValidationRules[input.name]?.some((rule) => {
    if (rule.condition) {
      errorMessage = rule.errorMessage;
      return true;
    }
    return false;
  });

  if (isError(errorMessage)) {
    return errorMessage;
  }

  validityKeys.some((key) => {
    if (input.validity[key]) {
      errorMessage = input.validationMessage;
      return true;
    }
    return false;
  });

  return errorMessage;
};
