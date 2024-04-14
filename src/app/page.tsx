import { auth } from "@/auth/auth";
import { SignInButton, SignOutButton } from "./_components/AuthButton";
export default async function Home() {
  const session = await auth();
  if (!session?.user) return <SignInButton />;

  return (
    <div>
      <SignInButton />
      <SignOutButton />
      <h1>{session.user.name}</h1>
      <h2>{session.user.email}</h2>
    </div>
  );
}
