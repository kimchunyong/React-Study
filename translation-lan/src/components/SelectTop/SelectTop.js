import React, { Component } from 'react';

import SelectPop from '../SelectPop/SelectPop';

import './SelectTop.css';

class SelectTop extends Component {
    render() {
        return (
            <div className="slc__top">
                <div className="slc__items">
                    <span className="slc__lnk">영어</span>
                    <SelectPop />
                </div>
                <div className="slc__items">
                    <span className="slc__lnk">한국어</span>
                    <SelectPop />
                </div>
            </div>
        );
    }
}

export default SelectTop;