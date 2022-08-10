import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCountry } from '../slices/mySlice';

export default function Details() {
    const state = useSelector(state => state.myState);
    const dispatch = useDispatch();
    let { name } = useParams();
    console.log(name);

    useEffect(() => {
      
    }, [])

console.log(state)

    return (
        <div className='details-container'>

        </div>
    )
}

