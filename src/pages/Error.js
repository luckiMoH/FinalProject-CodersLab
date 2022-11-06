import React from 'react';
import { NotFound } from '../components';
import {Link} from "react-router-dom";
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
    return (
        <Wrapper className='full-page'>
            <NotFound />
            <h3>Error 404 - Page Not Found</h3>
            <p>Something is missing</p>
            <Link to='/'>back home</Link>
        </Wrapper>
    );
};

export default Error;