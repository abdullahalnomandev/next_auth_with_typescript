import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware() {

    // return NExtResponse
}, {
  callbacks: {
    // authorized: ({ token }) => !!token,
    authorized({token}:any){
        return token?.role === "admin"
    }
  },
});
export const config = { matcher: ["/dashboard", "/account"] };

// export { default } from "next-auth/middleware"

// export const config = { matcher: ["/dashboard"] }
