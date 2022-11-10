import React, { useState } from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/router";

const login = () => {
  interface User {
    email: string;
    password: string;
  }

  const { data: session, status } = useSession();
  const [userInfo, setUserInfo] = useState<User>({ email: "", password: "" });

  console.log(session, status);
  const router = useRouter();

  const handleSignIn = async () => {
    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false
    });

    console.log("res", res);
  };

  if (session) {
    router.forward;
    // return (
    //   <>
    //     Signed in as {session.user?.email} <br />
    //     <button
    //       className="px-3 py-2 bg-red-600  text-white rounded-full m-11"
    //       onClick={() => signOut()}
    //     >
    //       Sign out
    //     </button>
    //   </>
    // );
  }

  console.log(userInfo);

  return (
    <>
      <div className="w-[370px] m-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  mt-52">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              email
            </label>
            <input
              className="shadow appearance-none  border border-gray-700 rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              onBlur={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              placeholder="email"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
              type="button"
              onClick={() => {
                signIn("email", { email: userInfo.email, redirect: false });
              }}
            >
              LOOG In
            </button>
          </div>
        </form>

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  mt-52">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              email
            </label>
            <input
              className="shadow appearance-none  border border-gray-700 rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              onBlur={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              placeholder="email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onBlur={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
              className="shadow appearance-none border border-gray-500  rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
              type="button"
              onClick={() => handleSignIn()}
            >
              Sign In
            </button>
          </div>
        </form>
        <button
          className="px-3 py-2 bg-green-600  text-white rounded-full w-full"
          onClick={() =>
            signIn("google", { callbackUr: router.query?.callbackUrl })
          }
        >
          Sign in with Google
        </button>
        <button
          className="px-3 py-2 bg-blue-600  text-white rounded-full w-full"
          onClick={() => signIn("facebook")}
        >
          FACEBOOK SIGN IN
        </button>
      </div>
    </>
  );
};

export default login;
