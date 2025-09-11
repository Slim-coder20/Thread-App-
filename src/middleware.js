import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";
import { hasCookie } from "cookies-next/server";


// avec le middleware on va essayer de détecter si l'utilisateur est authentifié ou pas //
export function middleware(request) {
  let isAuthenticated = false;

  // vérifier que le User en mode invité pour ça on va utiliser un cookie et on utilisera hasCookie de cookies-next/server //
  if(request.cookies.has("guest")) {
    isAuthenticated = true; 
  }
  // Vérifier que le User est connecté

  // verifié que le User est authentifié
  if (!isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
