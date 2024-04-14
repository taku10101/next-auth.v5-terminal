import { auth, signIn, signOut } from "@/auth/auth";

export async function SignInButton() {
  const session = await auth();
  if (!session?.user)
    return (
      <>
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <button type='submit'>Sign in</button>
        </form>
      </>
    );
}

export async function SignOutButton() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type='submit'>Sign out</button>
      </form>
    </>
  );
}
