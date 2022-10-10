import { AppStore } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoutes = () => {
    const user = useSelector((store: AppStore) => store.user);
    const navigate = useNavigate();
    useEffect(() => {
        if (user.userId === 0) {
            navigate("/");
        }
    }, [user])
    return user.userId === 0 ? <Navigate to="/" /> : <Outlet />;
}
