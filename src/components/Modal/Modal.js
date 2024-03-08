import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import { createPortal } from "react-dom";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#232323',
    padding: '36px 18px',
    zIndex: 1000,
}
const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000,
}
class Modal extends React.Component {
    render() {
        if (!this.props.open) return null;
        return createPortal(
            <>
                <div style={OVERLAY_STYLES} />
                <div style={MODAL_STYLES} className="Modal">
                        <h2 className="Modal__header">{this.props.title}</h2>
                        <a href="#" className="Modal__close" onClick={this.props.onClose}></a>
                    {this.props.children}
                </div>
            </>
        , document.getElementById('App-portal'))
    }
}

Modal.propTypes = {
    open: PropTypes.bool,
    title: PropTypes.string,
    onClose: PropTypes.func,
    children: PropTypes.element,
};
export default Modal;
