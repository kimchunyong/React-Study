import React, { Component } from 'react';
import TextArea from '../TextArea/TextArea';
import TextResult from '../TextResult/TextResult';

class ResultBody extends Component {
    render() {
        return (
            <>
                <TextArea />
                <TextResult />
            </>
        );
    }
}

export default ResultBody;