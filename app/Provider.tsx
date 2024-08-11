"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]/route";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
