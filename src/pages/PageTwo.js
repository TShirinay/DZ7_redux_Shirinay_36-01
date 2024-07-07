import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAddDateTitans} from "../reducer/getAddDate";

const PageTwo = () => {
    const dispatch = useDispatch()
    const {titans, status, error} = useSelector(state => state.getAddDate)
    useEffect(() => {
        dispatch(getAddDateTitans())
    },[])
    console.log(status)
    console.log(titans)
    console.log(error)
    return (
        <div>
            <h1>Вторая страница</h1>
        </div>
    );
};

export default PageTwo;