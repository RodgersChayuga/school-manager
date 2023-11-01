import { ID } from "appwrite";

import { ILogin, INewUser } from "@/types";
import { account, graphql } from "./config";

// Signup User
export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.firstName + " " + user.lastName
    );

    return newAccount;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// Login User
export async function getUserAccount({ email, password }: ILogin) {
  try {
    const response = await graphql.mutation({
      query: `mutation (
          $email: String!,
          $password: String!,
      ) {
        accountCreateEmailSession(
          email: $email,
          password: $password,
      ) {
          _id
        }
      }`,
      variables: {
        email: email,
        password: password,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// Get Current User
export const getCurrentUser = async () => {
  const currentUser = await graphql.query({
    query: `query {
          accountGet {
              _id
              name
              emailVerification
              email
          }
      }`,
  });
  return currentUser.data.accountGet;
};
