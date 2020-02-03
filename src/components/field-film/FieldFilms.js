import React from 'react';
import './FieldFilms.css';
import FieldYear from '../field-year/FieldYear'

function FieldFilms(props) {
    return (
        <div className="FieldFilms">
            {props.years.map(year => {
                return (
                    <FieldYear key={year.toString()}
                        year={year}
                        films={props.films.filter(item => item.year === year)}
                    />
                )
            })}
        </div>
    );
}

export default FieldFilms;