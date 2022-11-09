import { NextPage } from "next";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";

const Protected: NextPage = () => {
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/login");
  }, [status]);

  return (
    <div>
      {status === "authenticated" && (
        <div>
          <h1>This page is protected for special people. like {"\n"}</h1>
          {JSON.stringify(data.user, null, 2)}
        </div>
      )}
    </div>
  );
};

export default Protected;
