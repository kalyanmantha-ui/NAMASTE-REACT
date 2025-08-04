import {useEffect , useState} from "react";


const useOnlineStatus = () => {
    const [status , setStatus] = useState(true);

    function handleOffline() {
        setStatus(false);
    }
    function handleOnline() {
        setStatus(true);
    }

    useEffect (() => {
        window.addEventListener("offline",handleOffline)
        window.addEventListener("online", handleOnline)

        return () => {
            window.removeEventListener("offline",handleOffline);
            window.removeEventListener("online",handleOnline)
        }
    },[])
    return status;
}

export default useOnlineStatus;