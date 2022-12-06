import { createCategoryAdapter } from "@/adapters";
import { ICategory, ICategoryCreation } from "@/models";
import { API_URL } from "@/utilities/variables";

export const categoryService = {
    get: async (userId: number): Promise<ICategory[] | null> => {
        let data;
        if ((window as any)?.isDevelopment) {
            return [{ name: "Comida", id: 1 }, { name: "Salidas", id: 2 }]
        } else {
            const petition = await fetch(`${API_URL}v1/categorys?idUser=${userId}`);
            if (!petition.ok) return null;
            data = await petition.json();
        }

        return createCategoryAdapter(data);
    },
    create: async (category: ICategoryCreation): Promise<boolean> => {
        if ((window as any)?.isDevelopment) {
            return true;
        }
        const body = {
            "idUser": category.userId,
            "nameCategory": category.name,
            "descriptionCategory": category.description,
        }
        const petition = await fetch(API_URL + `v1/categorys/save`, {
            method: "POST", body: JSON.stringify(body), headers: {
                'Content-Type': 'application/json',
            }
        });
        return petition.ok;
    },
    delete: async (idCategory: number): Promise<boolean> => {
        if ((window as any)?.isDevelopment) {
            return true;
        }
        const body = { idCategory: idCategory }
        const petition = await fetch(API_URL + `v1/categorys/delete`, {
            method: "POST", body: JSON.stringify(body), headers: {
                'Content-Type': 'application/json',
            }
        });
        return petition.ok;
    }
}