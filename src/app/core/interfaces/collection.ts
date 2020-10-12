import {Product} from '../interfaces/product';

export interface Collection {
  id: number,
  name: string,
  items: Product[]
}
