import React, { Component } from 'react';
import { connect } from 'react-redux';

import './TransButton.css'

class TransButton extends Component {
    getApi(){
        console.log(this)
    }

    render() {
        return (
            <>
                <button className="trans__btn" type="button" onClick={this.getApi}>번역하기</button>
            </>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getApi:()=>{
            dispatch({type:"GET_TEXT"})
        }
    }
}

export default connect(null,mapDispatchToProps)(TransButton);