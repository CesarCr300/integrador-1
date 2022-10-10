import { AppStore } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

import "@/styles/base.styles.css";
import { resetUser } from "@/redux/states/user";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
    const user = useSelector((store: AppStore) => store.user);
    const dispatch = useDispatch();

    const handleLogout = (e: any) => {
        dispatch(resetUser());
    }
    return (
        <div className="page">
            <div className="header">
                <p className="header__title">Mis Finanzas</p>
                {user.userId !== 0 && <button className="header__logout" onClick={handleLogout}>Cerrar sesión</button>}
            </div>
            <div className="container">
                {children}
            </div>
        </div>
    )
}
