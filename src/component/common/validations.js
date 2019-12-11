import { errorMessages } from "../../globalConstants";

export function validate(value) {
  if (value.trim() === "") return errorMessages.emptyInputField;
}
