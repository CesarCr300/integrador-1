import { API_URL } from "@/utilities/variables";
import { IUserLogin, IUserRegister } from "@/models";
import { createUserAdapter } from "@/adapters";

export const userService = {
    login: async (values: IUserLogin) => {
        const petition = await fetch(API_URL + "v1/users/login", {
            method: "POST", body: JSON.stringify(values), headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!petition.ok) {
            return null;
        }
        const response = await petition.json();
        return createUserAdapter(response);
    },
    register: async (userData: IUserRegister) => {
        const body = {
            name: userData.name,
            lastName: userData.lastName,
            email: userData.email,
            pass: userData.password,
            phone: userData.phone
        };
        const petition = await fetch(API_URL + "v1/saveUsuario", {
            method: "POST", body: JSON.stringify(body), headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!petition.ok) {
            return null;
        }
        const response = await petition.json();
        return response.idUser;
    },
}