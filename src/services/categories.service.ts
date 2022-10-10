import { createCategoryAdapter } from "@/adapters/categories.adapter";
import { ICategory } from "@/models/category.model";
import { serviceUrl } from "@/services";

export const categoryService = {
    get: async (userId: number): Promise<ICategory[] | null> => {
        // const petition = await fetch(`${serviceUrl}v1/categorys?idUser=${userId}`);
        // if (!petition.ok) return null;
        // const data = await petition.json();
        // return createCategoryAdapter(data);
        return [{ name: "ahoadf", id: 1 }, { name: "1", id: 2 }]
    }
}