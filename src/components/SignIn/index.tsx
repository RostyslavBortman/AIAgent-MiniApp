'use client';
import { Session } from 'next-auth';
import { signIn, signOut, useSession } from 'next-auth/react';

export const SignIn = () => {
  // let session: Session = {
  //   expires: 'Sat Nov 15 2025 13:09:34 GMT+0000',
  //   user: {
  //     name: '0xeeb7d584192abfdf6aaa122be4a710e2f3ea04e9',
  //   },
  // };

  const { data: session } = useSession();

  // if (authSession) {
  //   session = authSession;
  // }

  if (session) {
    return (
      <>
        Signed in as {session?.user?.name?.slice(0, 10)} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  } else {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }
};
