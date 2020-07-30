import faker from 'faker';

const randomData = {
  moraleSelectorIndex: faker.random.number(10),
  hoursSelectorIndex: faker.random.number({ min: 11, max: 21 }),
  text: faker.random.words(20),
};

export default randomData;
