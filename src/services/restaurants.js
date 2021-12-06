import { client } from './client';

export function getRestaurants() {
  const { data, error } = await client.from('restaurants');
}
