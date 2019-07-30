import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import styled from 'styled-components';

const VideoBox = styled.div`
    max-width: 720px;
    width:100%;
    margin: 0 auto;
    padding:20px;
    text-align:center;
`
const VideoView = styled.video`
    display: block;
    width: 100%;
`

const VideoTitle = styled.h1`
    text-align: left;
    padding: 10px;
    font-weight: 700;
    color: #595959;
    border: 1px solid #9e9e9e;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`
const VideoContenst = styled.span`
    display: block;
    text-align: left;
    padding: 10px;
    border: 1px solid #9e9e9e;
`

const VideoUser = styled(VideoContenst)`
    border-top:0;
`

class List extends Component {
    state = {
        data: null,
    }

    componentWillMount() {
        this.props.firebase.getUploadList().then((dataList) => {
            this.setState({ data: dataList });
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.data
                        ? this.state.data.map((value, idx) => {
                            return (

                                value.fileUrl
                                    ?
                                    <VideoBox key={idx}>
                                        <VideoTitle>{idx + 1}.{value.inpTitle}</VideoTitle>
                                        {value.fileUrl === '' ? '비디오가 없습니다.' : <VideoView controls ><source src={value.fileUrl} type="video/mp4"></source></VideoView>}
                                        <p>
                                            <VideoContenst>내용: {value.contentsTxt}</VideoContenst>
                                            <VideoUser>작성자: {value.userMail}</VideoUser>
                                        </p>
                                    </VideoBox>
                                    :
                                    ""


                            )
                        })
                        : '리스트 불러오는중 .....'
                }
            </div>
        );
    }
}

export default withFirebase(List);