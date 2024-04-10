import { signIn, signOut } from "@/auth/auth";

export async function SignInButton() {
  return (
    <button
      onClick={async () => {
        "use server";
        await signIn();
      }}
    >
      Sign in
    </button>
  );
}

export async function SignOutButton() {
  return (
    <button
      onClick={async () => {
        "use server";
        await signOut();
      }}
    >
      Sign out
    </button>
  );
}
