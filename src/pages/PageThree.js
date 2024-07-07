import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAddDateAttakPersons} from "../reducer/getAddDate";

const PageThree = () => {
    const dispatch = useDispatch()
    const {characters, status, error} = useSelector(state => state.getAddDate)
    useEffect(() => {
        dispatch(getAddDateAttakPersons())
    },[])
    console.log(status)
    console.log(characters)
    console.log(error)
    return (
        <div>
            <h1>Третья страница</h1>
        </div>
    );
};

export default PageThree;