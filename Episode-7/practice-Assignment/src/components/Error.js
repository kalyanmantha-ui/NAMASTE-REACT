import {useRouteError} from "react-router-dom"



const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>{error.data}</h1>
            <h2>Something Went Wrong</h2>
        </div>
    );
}

export default Error;