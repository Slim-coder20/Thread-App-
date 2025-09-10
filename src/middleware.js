import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

// avec le middleware on va essayer de détecter si l'utilisateur est authentifié ou pas //
export function middleware(request) {
  let isAuthenticated = false;

  if (!isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url); 
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"], 
}