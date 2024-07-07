import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import getAddDate, {getAddDateAxios} from "../reducer/getAddDate";

const PageOne = () => {
    const dispatch = useDispatch()
    const {date, status, error} = useSelector(state => state.getAddDate)
    useEffect(() => {
        dispatch(getAddDateAxios())
    },[])
    console.log(status)
    console.log(date)
    console.log(error)
    return (
        <div>
            <h1>Первая страница</h1>
        </div>
    );
};

export default PageOne;