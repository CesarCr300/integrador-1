export interface IUser {
  name: string;
  lastName: string;
  userId: number;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  email: string;
  password: string;
  name: string;
  lastName: string;
  phone: string;
}