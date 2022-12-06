import { IconDelete } from "@/components/Icons/IconDelete";
import { ICategory } from "@/models";
import { AppStore } from "@/redux/store";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllCategories } from "../application/category.application";
export const CategoriesList = () => {
    const user = useSelector((store: AppStore) => store.user);
    const [categories, setCategories] = useState<ICategory[] | null>([]);
    useEffect(() => {
        getAllCategories(user.userId, setCategories)
    }, []);
    return <section>
        {categories?.map(category => <article key={category.id}>{category.name} <IconDelete></IconDelete></article>)}
    </section>
}