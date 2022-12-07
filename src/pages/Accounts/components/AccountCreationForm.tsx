import { useForm } from "@/hooks";
import { IAccountCreation } from "@/models";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createAccount } from "../application/account.application"

export const AccountCreationForm = () => {
    const navigate = useNavigate();
    const user = useSelector((store: AppStore) => store.user);

    const { formValues, handleInputChange } = useForm<IAccountCreation>({
        name: "",
        userId: user.userId,
        description: ""
    });

    const handleSubmit = (e:any) => {
        e.preventDefault();
        createAccount(formValues, navigate);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="name" value={formValues.name} onChange={handleInputChange}
                    placeholder="Nombre" />
                <input type="text" name="description" value={formValues.description} onChange={handleInputChange} placeholder="Descripción" />
            </div>
            <button>Crear</button>
        </form>
    )
}
