export enum ValidationMessages {
  required = 'Please enter this value',
  email = 'Invalid email id',
  mobile = 'Invalid mobile no',
  integer = 'Please enter a valid intege value',
  regex = 'Please enter a valid value',
  inverseRegex = 'Please enter a valid value',
  maxValue = 'Value exceeds the maximum value allowed.',
  minValue = 'Value is less than the minimum value allowed.',
  maxLength = 'Character limit exceeded.',
  minLength = 'Not enough characters entered.',
  pan = 'Expected format AAAAA5555A',
  aadhar = 'Expected format 555555555555',
  gstin = 'Expected format 22AAAAA0000A1Z5',
  pincode = 'Please enter a valid 6 digit PIN code',
  alphaNumeric = 'Please enter only alphabets and numbers.',
  alphaNumericWithSpace = 'Invalid Characters.',
  multipleOf = 'Please enter the value which is multiple of a desired number.',
}

export enum VALIDATORS {
  INTEGER = 'integer',
  EMAIL = 'email',
  MOBILE = 'mobile',
  REQUIRED = 'required',
  REGEX = 'regex',
  INVERSE_REGEX = 'inverseRegex',
  MAX_VALUE = 'maxValue',
  MIN_VALUE = 'minValue',
  MIN_LENGTH = 'minLength',
  MAX_LENGTH = 'maxLength',
  PAN = 'pan',
  AADHAR = 'aadhar',
  GSTIN = 'gstin',
  ALPHANUMERIC = 'alphaNumeric',
  ALPHANUMERIC_WITH_SPACE = 'alphaNumericWithSpace',
  MULTIPLE_OF = 'multipleOf',
}

export enum NavigationKeys {
  ENTER = 13,
  ARROW_UP = 38,
  ARROW_DOWN = 40,
}
