import { faker } from "@faker-js/faker";

export const mockedChips = Array.from({ length: 15 }, () => ({
  text: faker.commerce.productName(),
  color: `hsl(${Math.floor(Math.random() * 360)}, 90%, 35%)`,
}));
