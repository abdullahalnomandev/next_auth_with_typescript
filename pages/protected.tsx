import React from "react";
import { getSession, useSession } from "next-auth/react";

const Protected = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return (
      <div>
        <h1>You are unauthenticated. this is Protected page</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>PROTECTED {session?.user?.email}</h1>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/auth/login",
      },
    };
  return {
    props: { session },
  };
};
export default Protected;
