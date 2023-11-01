export type IUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export type INewUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type ILogin = {
  email: string;
  password: string;
};
