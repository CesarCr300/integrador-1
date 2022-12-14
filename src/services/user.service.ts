import { API_URL } from "@/utilities/variables";
import { IUserLogin, IUserRegister } from "@/models";
import { createUserAdapter } from "@/adapters";

export const userService = {
    login: async (values: IUserLogin) => {
        if ((window as any)?.isDevelopment) {
            return createUserAdapter({ name: "Cesar", lastName: "Contreras", idUser: 1 });
        }
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
        if ((window as any)?.isDevelopment) {
            return 1;
        }
        const body = {
            name: userData.name,
            lastName: userData.lastName,
            email: userData.email,
            pass: userData.password,
            phone: userData.phone
        };
        const petition = await fetch(API_URL + "v1/users/save", {
            method: "POST", body: JSON.stringify(body), headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!petition.ok) {
            return null;
        }
        const response = await petition.json();
        return createUserAdapter(response);
    },
}