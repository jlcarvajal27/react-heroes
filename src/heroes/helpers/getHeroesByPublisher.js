import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];
  if (!validPublisher.includes(publisher)) {
    throw new Error(` el ${publisher} que se recibio no existe `);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
