// app/page.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Welcome to our app!</h1>
      {session ? (
        <p>
          You are signed in. <Link href="/dashboard">Go to Dashboard</Link>
        </p>
      ) : (
        <p>
          You are not signed in. <Link href="/api/auth/signin">Sign in</Link>
        </p>
      )}
    </main>
  );
}
