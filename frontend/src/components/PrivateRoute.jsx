import { Navigate, Outlet } from "react-router-dom";
import { useAAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

function PrivateRoute() {
    const { loggedIn, checkingStatus } = useAAuthStatus();
    if (checkingStatus) {
        return <Spinner />;
    }
    return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
