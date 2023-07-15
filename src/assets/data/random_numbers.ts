const randomNumberBetween = (number: number) => {
  return Math.floor(Math.random() * number + 1);
};

const randomNumberBetweenWithFloat = (number: number) => {
  return Math.random() * number + 1;
};

export { randomNumberBetween, randomNumberBetweenWithFloat };
