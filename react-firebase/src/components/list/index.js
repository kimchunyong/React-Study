import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

class List extends Component {
    componentDidMount() {
        this.props.firebase.getUploadList();
    }

    render() {
        return (
            <div>
               list
            </div>
        );
    }
}


export default withFirebase(List);