import React from 'react';
import axios from 'axios';
import './App.css';
import FieldFilms from './components/field-film/FieldFilms'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            years: [],
            sort: true,
        }
        this.onSort = this.onSort.bind(this);
    }

    componentDidMount() {
        axios.get(`https://s3-eu-west-1.amazonaws.com/sequeniatesttask/films.json`)
            .then(res => {
                const films = res.data.films;
                films.map(film => {
                    if (film.rating == null)
                        return film.rating = 0;
                    else return film.rating;
                })
                this.setState({ films });
                let years = films.map(film => {
                    return film.year;
                })
                years = Array.from(new Set(years));
                years.sort((a, b) => {
                    return a - b;
                });
                this.setState({ years });
            })
            .catch(error => console.log('error:', error));
    }

    onSort() {
        const CloneData = this.state.years.concat();
        const sortType = this.state.sort === true ? false : true;
        CloneData.sort((a, b) => {
            if (sortType)
                return a - b;
            else
                return b - a;
        });
        this.setState({
            years: CloneData,
            sort: sortType,
        });
    }

    render() {
        const className = this.state.sort ? "fa fa-sort-amount-asc" : "fa fa-sort-amount-desc";
        return (
            <div className="App" >
                <header className="App-header" >
                    <h2>Фильмы</h2>            
                </header>
                <div className="Toolbar" >
                <button className="sort-button" onClick={this.onSort}>Сортировать по году <i className={className}></i></button>
                </div>
                <FieldFilms years={this.state.years}
                    films={this.state.films}
                />
            </div>
        );
    }
}

export default App;