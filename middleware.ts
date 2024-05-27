import { NextRequest } from 'next/server';
import { getSession } from './lib/session';

interface IRoutes {
  [key: string]: boolean;
}

const publicOnlyUrls: IRoutes = {
  '/': true,
  '/login': true,
  '/create-account': true,
};

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const exists = publicOnlyUrls[request.nextUrl.pathname];
  if (!session.id) {
    if (!exists) {
      return Response.redirect(new URL('/', request.url));
    }
  } else {
    if (exists) {
      return Response.redirect(new URL('/profile', request.url));
    }
  }
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
