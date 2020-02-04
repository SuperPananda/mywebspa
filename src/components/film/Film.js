import React from 'react';
import './Film.css';
import ModalWindow from '../modal-window/ModalWindow'

class Film extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false };
    }

    handleShow = () => {
        this.setState(state => ({ showModal: true }));
    }

    handleHide = () => {
        this.setState(state => ({ showModal: false }));
    }

    render() {
        const modal = this.state.showModal ? (
            <ModalWindow
                onclose={this.handleHide}
                film={this.props.film}
            />
        ) : null;
        return (
            <div className="Film-block" >
                <div className="film-info" onClick={this.handleShow}>
                    <div className="film-localizedname">{this.props.film.localized_name}</div>   
                    <div className="film-rating">{this.props.film.rating}</div>
                </div>
                <p className="film-name" onClick={this.handleShow}>{this.props.film.name}</p>
                {modal}
            </div>
        );
    }
}

export default Film;