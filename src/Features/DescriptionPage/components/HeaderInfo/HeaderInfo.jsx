import React from 'react';

// import './NoFilmsFound.scss'

const HeaderInfo = ({poster_path, title, tagline, release_date, runtime, overview}) => (
    <div className="b-header-info">
        <div className="b-header-info__img">
            <img src={poster_path} className="b-header-info__img-pic" alt=""/>
        </div>
        <div className="b-header-info__about">
            <div className="b-header-info__about-title">
                {title}
            </div>
            {
                tagline &&
                <div className="b-header-info__about-tagline">
                    {tagline}
                </div>
            }
            <div className="b-header-info__about-year b-year">
                <span className="b-year__release-date">{release_date}</span>
                <span className="b-year__runtime">{runtime}</span>
            </div>
            <div>{overview}</div>
        </div>
    </div>
);

export default HeaderInfo;
