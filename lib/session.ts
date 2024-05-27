import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

interface ISessionContent {
  id?: number;
}

export function getSession() {
  return getIronSession<ISessionContent>(cookies(), {
    cookieName: 'code-challenge',
    password: process.env.COOKIE_PASSWORD!,
  });
}

export async function loginWithId(user: { id: number }) {
  const session = await getSession();
  session.id = user.id;
  await session.save();
}
