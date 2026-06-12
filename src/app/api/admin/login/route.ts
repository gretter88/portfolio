import { NextRequest, NextResponse } from "next/server";

const ADMIN_COOKIE = "portfolio_admin_session";

export async function POST(req: NextRequest) {
  try {
    const { user, password } = await req.json();

    const validUser = process.env.ADMIN_USER;
    const validPassword = process.env.ADMIN_PASSWORD;
    const secret = process.env.ADMIN_SESSION_SECRET || "portfolio-admin";

    if (!user || !password) {
      return NextResponse.json(
        { ok: false, message: "Faltan credenciales" },
        { status: 400 }
      );
    }

    if (user !== validUser || password !== validPassword) {
      return NextResponse.json(
        { ok: false, message: "Usuario o contraseña incorrectos" },
        { status: 401 }
      );
    }

    const res = NextResponse.json({ ok: true });

    res.cookies.set(ADMIN_COOKIE, secret, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 12,
    });

    return res;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Error interno" },
      { status: 500 }
    );
  }
}