import React, { Component } from 'react';

import './TransButton.css'

class TransButton extends Component {
    render() {
        return (
            <>
                <button className="trans__btn" type="button">번역하기</button>
            </>
        );
    }
}

export default TransButton;