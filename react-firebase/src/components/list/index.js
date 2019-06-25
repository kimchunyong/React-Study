import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

class List extends Component {
    state ={
        data:null,
    }

    componentWillMount (){
        this.props.firebase.getUploadList().then((dataList)=>{
            this.setState({data:dataList});
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.data 
                    ? this.state.data.map((value,idx) =>{
                        console.log(value)
                        return (
                            <div key={idx}>
                                <h1>{value.inpTitle}</h1>
                                {value.fileUrl === '' ? '비디오가 없습니다.' : <video controls ><source src={value.fileUrl} type="video/mp4"></source></video>}
                                <p>
                                    <span>{value.contentsTxt}</span>
                                    <span>{value.userMail}</span>
                                </p>
                            </div>
                        )
                    }) 
                    :'리스트 불러오는중 .....'
                }
            </div>
        );
    }
}

export default withFirebase(List);