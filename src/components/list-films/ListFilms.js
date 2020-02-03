import React from 'react';
import './ListFilms.css';
import Film from '../film/Film'

function ListFilms(props) {
    return (
        <div className="ListFilms">
            {props.films.map((film) => {
                return (
                    <Film key={film.id}
                        film={film}
                    />
                )
            })}
        </div>
    );
}

export default ListFilms;