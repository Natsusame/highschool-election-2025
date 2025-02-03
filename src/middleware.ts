import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const USERNAME = "neko";
const PASSWORD = "neko";

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ");
    if (scheme === "Basic") {
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(":");

      if (user === USERNAME && pass === PASSWORD) {
        return NextResponse.next(); // 認証成功
      }
    }
  }

  // 認証が必要な場合は 401 を返し、Basic 認証のダイアログを表示
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

// Middleware を適用する対象を指定 (全ページに適用する場合は省略可)
export const config = {
  matcher: "/:path*", // すべてのページに適用
};
