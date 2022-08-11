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

    for (let country of state.countries)
        // eslint-disable-next-line
        if (country.name.official == name) {
            dispatch(setCountry(country));
            break;
        }
    console.log(state.country)

    //get languages

    let languages = [];
    if (state.country.languages) {
        let languagesEntries = Object.entries(state.country.languages)
        for (let array of languagesEntries) {
            languages.push(array[1]);
            languages.push(" ")
        }
    }

    //get currencies

    let currencies = [];
    if (state.country.currencies) {
        let currenciesEntries = Object.entries(state.country.currencies);
        console.log(currenciesEntries)
        for (let array of currenciesEntries) {
            currencies.push(array[1].name);
            currencies.push(" ");
            currencies.push(array[1].symbol);
        }
    }

    return (
        <div className={'details-container ' + state.theme}>

            <div className="details">

                <div className="actions">
                    <button onClick={() => {
                        navigate("/")
                    }} className="back-button"> ◄ Back</button>
                </div>

                <div className="details-info-container">

                    {/* <img className='details-flag' src={state.country.flags.png} alt="" /> */}

                    <div className="details-info">
                        <h2>{state.country.name.common}</h2>

                        <div className="details-main-info">
                            <p className="d-info">Official Name : <span className='d-info-value'>{state.country.name.official}</span></p>
                            <p className="d-info">Population : <span className='d-info-value'>{state.country.population}</span></p>
                            <p className="d-info">Region : <span className='d-info-value'>{state.country.region}</span></p>
                            <p className="d-info">Sub Region : <span className='d-info-value'>{state.country.subregion}</span></p>
                            <p className="d-info">Capital : <span className='d-info-value'>{state.country.capital}</span></p>
                        </div>

                        <div className="details-sub-info">
                            <p className="d-info">Timezone : <span className='d-info-value'>{state.country.timezones}</span></p>
                            <p className="d-info">Currencies : <span className='d-info-value'>{currencies}</span></p>
                            <p className="d-info">Languages : <span className='d-info-value'>{languages}</span></p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

