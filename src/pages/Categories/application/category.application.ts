import { ICategory, ICategoryCreation } from "@/models";
import { categoryService } from "@/services";
import { NavigateFunction } from "react-router";

export const getAllCategories = async (userId: number, setData: React.Dispatch<React.SetStateAction<ICategory[] | null>>) => {
    let categories = await categoryService.get(userId);
    setData(categories);
}

export const createCategory = async (category: ICategoryCreation, navigate: NavigateFunction) => {
    let successful = await categoryService.create(category);
    if (!successful) return;
    navigate("/categories");
}

export const deleteCategoryById = async (categoryId: number, setCategories: React.Dispatch<React.SetStateAction<ICategory[] | null>>) => {
    const deleted = await categoryService.delete(categoryId);
    if (!deleted) return;
    setCategories((categories) => {
        let response = categories?.filter((category) => category.id !== categoryId)
        if (response == undefined || response?.length == 0) return [];
        return response;
    });

}