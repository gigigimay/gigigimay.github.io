export const randomInt = (max: number, min: number = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min
