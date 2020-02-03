import React from 'react';
import './Filmyear.css';

class Filmyear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: this.props.sort,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.sort !== prevProps.sort) {
            this.setState({
                sort: this.props.sort,
            });
        }
    }

    render() {
        const className = this.props.sort ? "fa fa-sort-desc fa-2x" : "fa fa-sort-asc fa-2x";
        return (
            <div className="Filmyear-block">
                <div className="film-year">{this.props.year}</div>
                <a className="Filmyear-block-button" onClick={() => {this.props.onSortReiting(this.state.sort)}}><i className={className}></i></a>
            </div>
        );
    }
}

export default Filmyear;