import { NextRequest, NextResponse } from "next/server";
export {default} from 'next-auth/middleware'

export const config = {
    matcher: ['/game/:path*']
}

// export async function middleware(request: NextRequest){
//     const requestHeader = new Headers(request.headers)
//     requestHeader.set('SpicyBets', 'Welcome')

//     const response = NextResponse.next({
//         request: {
//             headers: requestHeader
//         }
//     })

//     if(request.nextUrl.pathname.endsWith('provider/') || request.nextUrl.pathname.endsWith('provider')){
//         return NextResponse.redirect(new URL('/', request.url))
//     }
// }