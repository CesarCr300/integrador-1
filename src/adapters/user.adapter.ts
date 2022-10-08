import { IUser } from "@/models";

export const createUserAdapter = (user: any): IUser => ({
  name: user.name as string,
  lastName: user.lastName as string,
  userId: user.idUser as number
});
