import { ValidationError } from 'yup';

interface Error {
  [key: string]: string;
}

function getValidatorErrors(errors: ValidationError): Error {
  const errorValidation: Error = {};

  errors.inner.forEach(error => {
    errorValidation[error.path] = error.message;
  });

  return errorValidation;
}

export default getValidatorErrors;
