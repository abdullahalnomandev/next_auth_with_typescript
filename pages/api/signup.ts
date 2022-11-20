import fetch from "node-fetch";
import bcrypt from "bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("HIT", req.query,);

  const headers = {
    "content-type": "application/json",
    "x-hasura-admin-secret":process.env.NEXT_HASURA_ADMIN_SECRET,
  };

  // HAS PASSWORD
  const hasPassword= await bcrypt.hash(req.body.passwrd,10)
  console.log(hasPassword);
  
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
      passwrd: hasPassword,
    },
  };

  try {
    const response = await axios({
      url: process.env.NEXT_HASURA_END_POINT,
      method: "post",
      headers: headers,
      data: signUpUser,
    });
    console.log("response",response?.data); // data
    // console.log(response?.errors) ; // errors if any
  } catch (error) {
    console.log("error: ", error);
  }


};

