import { createCategoryAdapter } from "@/adapters";
import { ICategory } from "@/models";
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
    }
}