import { Bus } from "./bus";

export type Route = {
  name: string;
  options: { buses: Bus[] }[];
};
