export const delay = (duration: number) =>
  new Promise((res) => setTimeout(() => res(""), duration));
