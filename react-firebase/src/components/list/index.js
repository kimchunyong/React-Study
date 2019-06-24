import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

class List extends Component {
    componentDidMount() {
        
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