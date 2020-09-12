import React, { useState } from 'react';

import { useHttpClient } from '../../hooks/http-hook';
import { getGeocodePosition } from '../../util/get/getGeocodePosition';
import { getCityUrl } from '../../util/get/getUrl';

import { MAP_MARKER_ALT, SEARCH } from '../../SSOT/icons';

import LoadingSpinner from '../../UIElements/LoadingSpinner';
import ErrorModal from '../../UIElements/ErrorModal';
import Icon from '../../UIElements/Icon';

import classes from './Search.module.css';

const Search = () => {
    const [inputValue, setInputValue] = useState('');

    const { fetchData, fetchDataByLocalization, error, isLoading } = useHttpClient();

    const handleInput = (event) => {
        const { value } = event.target;
        setInputValue(value);
    };

    const handleForm = (event) => {
        event.preventDefault();
        if (inputValue.trim()) fetchData(getCityUrl(inputValue));
    };

    const handleUrl = () => {
        if (inputValue.trim()) fetchData(getCityUrl(inputValue));
    };

    const getCurrentPosition = () => {
        getGeocodePosition(setInputValue, fetchDataByLocalization);
    };

    return (
        <>
            <div className={classes.search}>
                <Icon iconName={MAP_MARKER_ALT} onClick={getCurrentPosition} />
                <form className={classes.search__form} onSubmit={handleForm}>
                    <input
                        type='text'
                        className={classes.search__input}
                        value={inputValue}
                        onChange={handleInput}
                        placeholder='Search city'
                    />
                </form>
                <Icon iconName={SEARCH} onClick={handleUrl} />
            </div>
            {isLoading && <LoadingSpinner />}
            {error && <ErrorModal />}
        </>
    );
};

export default Search;
