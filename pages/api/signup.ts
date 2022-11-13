import fetch from "node-fetch";
// import bcrypt from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("HIT", req);

  const headers = {
    "content-type": "application/json",
    "x-hasura-admin-secret":
      process.env.NEXT_HASURA_ADMIN_SECRET ||
      "pZg65ZTrvsBXkLUz9QoZDfiswwm74eZgFayLj5g3mk73Y9S1T6zQ84j1nliJ4GNX",
  };
  const signUpUser = {
    query: `mutation insertUser($name: String!, $email: String, $username: String!, $passwrd: String!) {
          insert_users_one(object: {name: $name, email: $email, username: $username, password: $passwrd}) {
            id
          }
        }`,
    variables: {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      passwrd: req.body.passwrd,
    },
  };

//   try {
//     const response = await axios({
//       url: process.env.NEXT_HASURA_END_POINT,
//       method: "post",
//       headers: headers,
//       data: signUpUser,
//     });
//     console.log(response?.data); // data
//     // console.log(response?.errors) ; // errors if any
//   } catch (error) {
//     console.log("error: ", error);
//   }

  //   // get request input
  //   const { name, email, username, passwrd } = req.body.input;

  //   // run some business logic
  //   let hasPassword = await bcrypt.has(passwrd,10)

  //   // execute the Hasura operation
  //   const { data, errors } = await execute({ name, email, username, passwrd:hasPassword });

  //   // if Hasura operation errors, then throw error
  //   if (errors) {
  //     return res.status(400).json(errors[0])
  //   }

  //   // success
  //   return res.json({
  //     ...data.insert_users_one
  //   })
};
