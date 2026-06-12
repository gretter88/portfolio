import { cookies } from "next/headers";

export const ADMIN_COOKIE = "portfolio_admin_session";

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE)?.value;
  const secret = process.env.ADMIN_SESSION_SECRET || "portfolio-admin";
  return session === secret;
}