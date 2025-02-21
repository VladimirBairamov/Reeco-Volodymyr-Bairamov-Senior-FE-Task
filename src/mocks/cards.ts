import { faker } from "@faker-js/faker";

export const mockedCards = Array.from({ length: 10 }, () => ({
  title: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  imageSrc: faker.image.urlLoremFlickr({
    width: 338,
    height: 160,
  }),
  buttonText: "Select product",
}));
