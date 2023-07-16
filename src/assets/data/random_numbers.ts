const randomNumberBetween = (number: number) => {
  return Math.floor(Math.random() * number);
};

const randomNumberBetweenWithFloat = (number: number) => {
  return Math.random() * number;
};

export { randomNumberBetween, randomNumberBetweenWithFloat };
