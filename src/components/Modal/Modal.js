import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import { createPortal } from "react-dom";

class Modal extends React.Component {
    render() {
        if (!this.props.open) return null;
        return createPortal(
            <>
                <div className="Modal__overlay"/>
                <div className="Modal">
                        <h2 className="Modal__header">{this.props.title}</h2>
                        <button className="Modal__close" onClick={this.props.onClose}></button>
                    {this.props.children}
                </div>
            </>
        , document.getElementById('App-portal'))
    }
}

Modal.propTypes = {
    open: PropTypes.bool,
    title: PropTypes.string | PropTypes.element,
    onClose: PropTypes.func,
    children: PropTypes.element,
};
export default Modal;
