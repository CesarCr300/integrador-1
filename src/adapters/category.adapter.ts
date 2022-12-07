import { ICategory } from "@/models"

export const createCategoryAdapter = (data: any): ICategory[] => {
    let response =  data?.map((category: any) => {
        return {
            name: category.nameCategory,
            id: category.idCategory
        }
    })
    if (response == null) response = [];
    return response;
}