import React from 'react';
import ReactDOM from 'react-dom';
import './ModalWindow.css';

const modalRoot = document.getElementById('modal');

function ModalWindowContent(props)
{
    return(
        <div className="ModalContent">
                <header className="ModalHeader">
                    <a className="ModalHeader-button" onClick={props.onclose}><i className="fa fa-reply fa-lg" aria-hidden="true"></i></a>
                    <h3 className="modal-content-localized_name">{props.film.localized_name}</h3>
                </header>
                <div className="ModalBody">
                    <div className="modal-content">
                        <div className="fug">
                            <img src={props.film.image_url} alt={props.film.name}/>
                        </div>
                        <div className="modal-content-info">
                            <p><span className="modal-content-film-name">{props.film.name}</span></p>
                            <p>Год: {props.film.year}</p>
                            <p>Рейтинг: <span className="modal-content-film-rating">{props.film.rating}</span></p>
                        </div>
                    </div>
                    <div className="modal-content-description">{props.film.description}</div>
                </div>
            </div>
    );
}

class ModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            <div className="ModalWindow">
                <ModalWindowContent
                    film={this.props.film}
                    onclose={this.props.onclose}
                />
            </div>,
            this.el
        );
    }
}

export default ModalWindow;