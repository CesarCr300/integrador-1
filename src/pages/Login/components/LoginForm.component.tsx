import { useForm } from '@/hooks/useForm';
import { IUserLogin } from '@/models';
import { useState } from 'react'

export const LoginForm = () => {
    const { formValues, handleInputChange } = useForm<IUserLogin>({ email: "", password: "" });
    const handleSubmit = (e: any) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Correo</h2>
                <input type="email" name="email" onChange={handleInputChange} />
            </div>
            <div>
                <h2>Contraseña</h2>
                <input type="password" name="password" onChange={handleInputChange} />
            </div>
            <button>Iniciar sesión</button>
        </form>
    )
}
