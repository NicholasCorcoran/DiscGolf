export type Course = {
  address: string;
  name: string;
  layout: {
    difficulty: string;
    name: string;
    holePars: number[];
    holeDistances: number[];
  };
};
