import { checkError, client } from './client';

export async function getRestaurants() {
  const response = await client.from('restaurants').select();
  return checkError(response);
}
