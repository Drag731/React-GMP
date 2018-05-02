import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderLogo.scss'

const HeaderLogo = ({description}) => (
    <div className="b-header__logo-wrap">
        <h1 className="b-header__logo-text">
            Filmzilla
        </h1>
        {
            description &&
            <Link
                to="/filmzilla"
                className="b-header__logo-link"
            >
                search
            </Link>
        }
    </div>
);

export default HeaderLogo;
