import { useState, useEffect } from "react";

const useRestaurentMenu = (id) => {
    const [json1, setjson1] = useState();

    useEffect(() => {
        fetchData(); 
    }, []);

    const fetchData = async () => {  
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.425938120298223&lng=78.39342287825744&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json2 = await data.json();  
        setjson1(json2);
    };

    return json1;
};

export default useRestaurentMenu;
