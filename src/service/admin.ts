import { Admin } from './../model/admin';
import { client } from './sanity';
export async function adminLogin({
  team,
  nickname,
  password,
}: Admin): Promise<boolean> {
  const query = `
    *[_type == "admin" && team->name == $team && nickname == $nickname && password == $password]`;
  const params = { team, nickname, password };

  const result = await client.fetch(query, params);

  return result.length > 0;
}
