import React from 'react';
import './FieldYear.css';
import Filmyear from '../filmyear/Filmyear'
import ListFilms from '../list-films/ListFilms'

class FieldYear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: props.films,
            sort: true,
        }
    }

    onSortReiting = (value) => {
        const CloneData = this.props.films.concat();
        const sortType = value === true ? false : true;
        CloneData.sort((a, b) => {
            if (sortType)
                return b.rating - a.rating;
            else
                return a.rating - b.rating;
        });
        this.setState({
            films: CloneData,
            sort: sortType,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.films !== prevProps.films) {
            this.setState({
                films: this.props.films,
            });
        }
    }

    render() {
        return (
            <div className="FieldYear">
                <Filmyear
                    year={this.props.year}
                    sort={this.state.sort}
                    onSortReiting={this.onSortReiting}
                />
                <ListFilms
                    films={this.state.films}
                />
            </div>
        );
    }
}

export default FieldYear;