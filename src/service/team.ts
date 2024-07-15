import { headers } from 'next/headers';
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

export async function getTeams() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_PATH}/api/team`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch teams');
  }

  return await response.json();
}
