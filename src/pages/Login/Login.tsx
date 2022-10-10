import { Link } from "react-router-dom";
import { LoginForm } from "./components/LoginForm.component";

export const Login = () => {
    return (
        <div className="column align-center">
            <h1>Iniciar sesión</h1>
            <LoginForm />
            <p>¿No tienes una cuenta?</p>
            <Link to={{ pathname: "/register" }}>¡Regístrate!</Link>
        </div>
    );
}