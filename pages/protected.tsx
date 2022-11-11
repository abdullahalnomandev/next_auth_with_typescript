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

export default Protected;
