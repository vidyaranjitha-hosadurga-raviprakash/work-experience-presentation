import { FIRST_NAME, LAST_NAME } from "@/data/Constants";

export const getFullName = () => {
  return `${FIRST_NAME} ${LAST_NAME}`;
};
export const getCurrentDate = (options = { dateStyle: "long" }) => {
  return new Date().toLocaleString("en-IN", options);
};

export const getOrdinal = (number) => {
  const ordinalValues = ["th", "st", "nd", "rd"];
  let selector;
  if (number <= 0) {
    selector = 4;
  } else if ((number > 3 && number < 21) || number % 10 > 3) {
    selector = 0;
  } else {
    selector = number % 10;
  }
  return ordinalValues[selector];
};
