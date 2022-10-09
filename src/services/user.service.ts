import { serviceUrl } from ".";
import { IUserLogin, IUserRegister } from "@/models";
import { createUserAdapter } from "@/adapters";

export const userService = {
    login: async (values: IUserLogin) => {
        // const petition = await fetch(serviceUrl + "v1/login", { method: "POST", body: JSON.stringify(values) });
        // if (!petition.ok){
        //     return null;
        // }
        // const response = await petition.json();
        // return createUserAdapter(response);

        return createUserAdapter({ name: "Cesar", lastName: "Contreras", idUser: 1 })
    },
    register: async (userData: IUserRegister) => {
        // const body = {
        //     name: userData.name,
        //     lastName: userData.lastName,
        //     email: userData.email,
        //     pass: userData.password,
        //     phone: userData.phone
        // };
        // const petition = await fetch(serviceUrl + "v1/saveUsuario", { method: "POST", body: JSON.stringify(body) });
        // if (!petition.ok) {
        //     return null;
        // }
        // const response = await petition.json();
        // return response.idUser;
        return 1;
    },
}