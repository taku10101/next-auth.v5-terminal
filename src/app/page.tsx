import Image from "next/image";
import { auth } from "@/auth/auth";

import { signIn } from "@/auth/auth";
export default async function Home() {
  const session = await auth();
  if (!session?.user)
    return (
      <div>
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <button type='submit'>Sign in</button>
        </form>
      </div>
    );
  return (
    <div>
      <h1>{session.user.name}</h1>
      <h2>{session.user.email}</h2>
    </div>
  );
}
