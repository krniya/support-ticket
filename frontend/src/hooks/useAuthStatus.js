const { useState, useEffect } = require("react");
const { useSelector } = require("react-redux");

export const useAAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);

    const { user } = useSelector((state) => state.auth);
    useEffect(() => {
        if (user) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
        setCheckingStatus(false);
    }, [user]);
    return { loggedIn, checkingStatus };
};
