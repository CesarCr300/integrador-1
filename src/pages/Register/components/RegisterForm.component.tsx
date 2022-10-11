import { useForm } from "@/hooks"
import { IUserRegister } from "@/models";
import { createUser } from "@/redux/states/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { registerUser } from "../application/register.application";

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { formValues, handleInputChange } = useForm<IUserRegister>({ email: "", lastName: "", password: "", name: "", phone: "" });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        registerUser(formValues, dispatch, createUser, navigate);
    }
    return (
        <form className="column" style={{ gap: "5px" }} onSubmit={handleSubmit}>
            <div>
                <input type="text" name="name" placeholder='Nombre' onChange={handleInputChange} value={formValues.name} required={true} />
                <input type="text" name="lastName" placeholder='Apellido' onChange={handleInputChange} value={formValues.lastName} required={true} />
            </div>
            <div>
                <input type="text" name="email" placeholder='Correo' onChange={handleInputChange} value={formValues.email} required={true} />
                <input type="password" name="password" placeholder='Contraseña' minLength={5} onChange={handleInputChange} value={formValues.password} required={true} />
            </div>
            <div>
                <input type="text" name="phone" placeholder='Teléfono' onChange={handleInputChange} value={formValues.phone} required={true} />
            </div>
            <button>Registrar</button>
        </form>
    )
}
