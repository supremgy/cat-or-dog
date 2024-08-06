import { client } from './sanity';

export async function fetchTeams() {
  try {
    const teams = await client.fetch(`
      *[_type == "team"]{
        name
      }
    `);
    return teams;
  } catch (error) {
    console.error('Error fetching teams:', error);
    throw new Error('Failed to fetch teams');
  }
}
