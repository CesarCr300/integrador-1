import { useForm } from "@/hooks"
import { IUserRegister } from "@/models";

export const RegisterForm = () => {
    const { formValues, handleInputChange } = useForm<IUserRegister>({ email: "", lastName: "", password: "", name: "", phone: "" });
    return (
        <form className="column" style={{ gap: "5px" }}>
            <div>
                <input type="text" name="name" placeholder='Nombre' onChange={handleInputChange} value={formValues.name} />
                <input type="text" name="lastName" placeholder='Apellido' onChange={handleInputChange} value={formValues.lastName} />
            </div>
            <div>
                <input type="text" name="email" placeholder='Correo' onChange={handleInputChange} value={formValues.email} />
                <input type="password" name="password" placeholder='Contraseña' minLength={5} onChange={handleInputChange} value={formValues.password} />
            </div>
            <div>
                <input type="text" name="phone" placeholder='Teléfono' onChange={handleInputChange} value={formValues.phone} />
            </div>
            <button>Registrar</button>
        </form>
    )
}
