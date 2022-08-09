import { NextResponse } from 'next/server'
import type { NextRequest, NextFetchEvent } from 'next/server'
import { isAuthValid } from './utils/auth'

export function middleware(request: NextRequest, ev: NextFetchEvent) {
  // console.log(request, ev);
  const { pathname } = request.nextUrl
  // console.log(request.geo);
 
  // console.log(request.nextUrl);
  // Example function to validate auth
  // if (isAuthValid(request)) {
  //   return NextResponse.next()
  // }

  // request.nextUrl.searchParams.set('from', request.nextUrl.pathname)
  // request.nextUrl.pathname = '/login'

  // return NextResponse.redirect(request.nextUrl)
  // return NextResponse.next()
}
// export const config = {
//   matcher: '/International',
// }