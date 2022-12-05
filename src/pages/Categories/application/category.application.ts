import { ICategory } from "@/models";
import { categoryService } from "@/services";

export const getAllCategories = async (userId: number, setData: React.Dispatch<React.SetStateAction<ICategory[] | null>>) => {
    var categories = await categoryService.get(userId);
    setData(categories);
}