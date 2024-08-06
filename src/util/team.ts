export async function getTeams() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_PATH}/api/team`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch teams');
  }

  return await response.json();
}
