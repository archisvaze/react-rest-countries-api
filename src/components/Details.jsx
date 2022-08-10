import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setCountry } from '../slices/mySlice';


export default function Details() {
    let navigate = useNavigate()
    const state = useSelector(state => state.myState);
    const dispatch = useDispatch();
    let { name } = useParams();
    console.log(name);

    useEffect(() => {
        for (let country of state.countries)
            if (country.name.official == name) {
                dispatch(setCountry(country))
                break;
            }
    }, [])

    console.log(state.country)

    return (
        <div className={'details-container ' + state.theme}>

            <div className="details">

                <div className="actions">
                    <button onClick={() => {
                        navigate("/")
                    }} className="back-button"> ◄ Back</button>
                </div>

                <div className="details-info-container">

                    <img className='details-flag' src={state.country.flags.png} alt="" />

                    <div className="details-info">
                        <h2>{name}</h2>
                    </div>

                </div>
            </div>

        </div>
    )
}

