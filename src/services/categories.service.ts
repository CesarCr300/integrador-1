import { createCategoryAdapter } from "@/adapters";
import { ICategory } from "@/models";
import {API_URL} from "@/utilities/variables";

export const categoryService = {
    get: async (userId: number): Promise<ICategory[] | null> => {
        // const petition = await fetch(`${API_URL}v1/categorys?idUser=${userId}`);
        // if (!petition.ok) return null;
        // const data = await petition.json();
        // return createCategoryAdapter(data);
        return [{ name: "ahoadf", id: 1 }, { name: "1", id: 2 }]
    }
}