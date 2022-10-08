import { serviceUrl } from ".";
import { IUserLogin } from "@/models";
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
    }
}