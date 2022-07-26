export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min) + min);

export const delay = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, duration);
  });
};
