import { ICategoryCreation } from "@/models";
import { AppStore } from "@/redux/store";
import { useForm } from "@/hooks";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createCategory } from "../application/category.application";

export const CategoriesCreationForm = () => {
    const navigate = useNavigate();
    const user = useSelector((store: AppStore) => store.user);

    const { formValues, handleInputChange } = useForm<ICategoryCreation>({
        userId: user.userId,
        name: "",
        description: "",
    });

    const handleSubmit = (e:any) => {
        e.preventDefault();
        createCategory(formValues, navigate);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="name" value={formValues.name} onChange={handleInputChange} 
                placeholder="Nombre"/>
                <input type="text" name="description" value={formValues.description} onChange={handleInputChange} placeholder="Descripción"/>
            </div>
            <button>Crear</button>
        </form>
    )
}
