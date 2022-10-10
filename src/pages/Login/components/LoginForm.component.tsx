import { useForm } from '@/hooks/useForm';
import { IUserLogin } from '@/models';
import { createUser } from '@/redux/states/user';
import { userService } from '@/services/user.service';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { formValues, handleInputChange } = useForm<IUserLogin>({ email: "", password: "" });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const loginResponse = await userService.login(formValues);
        if (loginResponse === null) {
            return;
        }
        dispatch(createUser(loginResponse));
        navigate("/home");
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>Correo</p>
                <input type="email" name="email" onChange={handleInputChange} required={true} />
            </div>
            <div>
                <p>Contraseña</p>
                <input type="password" minLength={4} name="password" onChange={handleInputChange} required={true} />
            </div>
            <button>Iniciar sesión</button>
        </form>
    )
}
