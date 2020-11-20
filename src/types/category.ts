import {Subcategory} from './subcategory';

export type Category = {
  id: string,
  name: string,
  subcategories: [Subcategory]
};
