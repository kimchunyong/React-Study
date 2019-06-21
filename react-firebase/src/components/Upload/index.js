import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import styled, { keyframes } from 'styled-components';

const UpLoadWraper = styled.div`
    width:90%;
    margin:0 auto;
`

const TitleInput = styled.input`
    width: 100%;
    padding: 14px;
    margin-top: 20px;
    border: 0;
    border-radius: 9px;
    border:1px solid #d2d2d2;
`

const UserNameInput = styled(TitleInput)`
    background-color: #efefef;
`

const UserVideoTxt = styled.textarea`
    width:100%;
    height:200px;
    resize:none;
    margin-top:15px;
    border:1px solid #d2d2d2;

    &:focus{
        border:1px solid #6088ff;
    }
`

const DragArea = styled.div`
    position:relative;
    border: 1px dashed #ccc;
    border-radius: 15px;
    width: 100%;
    margin: 15px auto;
    padding: 50px 0;
    text-align: center;
`

const InputFiles = styled.input`
    display:none;
`

const FileUploadBtn = styled.button`
    display: block;
    padding: 10px;
    margin:15px auto;
    background: #ccc;
    border-radius: 5px;
    border: 1px solid #ccc;
    cursor: pointer;
`

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
    position: fixed;
    top: 50%;
    left: 40%;
    transform:translate(-50%,-50%);
    border-radius: 50%;
    width: 10em;
    height: 10em;
    font-size: 10px;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(233, 30, 99, 0.3);
    border-right: 1.1em solid rgba(233, 30, 99, 0.3);
    border-bottom: 1.1em solid rgba(233, 30, 99, 0.3);
    border-left: 1.1em solid #e91e63;
    animation: ${rotate} 1.1s infinite linear;
    &:after {
        border-radius: 50%;
        width: 10em;
        height: 10em;
    }
`

const BgMask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
`


class UploadBase extends Component {
    state = {
        file: '',
        progress: 0,
        error: false,
        complete: false,
        fileUrl: '',
        dragging: false,
    }

    dropRef = React.createRef();

    handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    handleDragIn = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.dragCounter++;

        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({ dragging: true })
        }
    };
    handleDragOut = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.dragCounter--;

        if (this.dragCounter === 0) {
            this.setState({ drag: false })
        }
    };
    handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({ drag: false });

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            this.fileListTrans(e.dataTransfer.files);
            e.dataTransfer.clearData();
            this.dragCounter = 0;
        }
    }

    fileListTrans = (files) => {
        let fileBolb = files[0];

        const fileTypes = ['mp4', 'ogg'];

        const extension = fileBolb.name.split('.').pop().toLowerCase(),
            isSuccess = fileTypes.indexOf(extension) > -1;
        if (isSuccess) {
            let reader = new FileReader();
            reader.readAsDataURL(fileBolb);
            this.setState({ file: fileBolb });
            this.props.firebase.upLoadTask(fileBolb).on('state_changed',
                (snapshot) => {
                    //progress
                    console.log('progress');
                    this.setState({complete:true});
                },
                (error) => {
                    //error
                    console.log('에러남', error);
                },
                (complate) => {
                    //complate
                    this.props.firebase.storage.ref('file').child(fileBolb.name).getDownloadURL().then(url => {
                        this.setState({fileUrl:url});
                    })
                    this.setState({complete:false});
                },
            );
        } else {
            alert('파일 형식에 맞지 않습니다. mp4, ogg 형식의 파일을 올려주세요.');
            this.setState({ file: '' });
        }

    }


    componentDidMount() {
        this.dragCounter = 0;
        let div = this.dropRef.current;
        div.addEventListener('dragenter', this.handleDragIn);
        div.addEventListener('dragleave', this.handleDragOut);
        div.addEventListener('dragover', this.handleDrag);
        div.addEventListener('drop', this.handleDrop);
    }
    componentWillUnmount() {
        let div = this.dropRef.current
        div.removeEventListener('dragenter', this.handleDragIn);
        div.removeEventListener('dragleave', this.handleDragOut);
        div.removeEventListener('dragover', this.handleDrag);
        div.removeEventListener('drop', this.handleDrop);
    }

    handleUpload = (e) => {
        //firebase DB저장
    }

    render() {
        let currentUser = this.props.firebase.auth.currentUser;
        if(currentUser){
            currentUser = this.props.firebase.auth.currentUser.email;
        }
        return (
            <UpLoadWraper>
                <div>
                    <TitleInput type="text" placeholder="동영상 제목을 입력해 주세요."/>
                    <UserNameInput type="text" placeholder={currentUser} readOnly disabled/>
                    <UserVideoTxt></UserVideoTxt>
                </div>
                <DragArea className="drop-area" ref={this.dropRef}>
                    <p>mp4,ogg 형식의 파일만 넣어주세요.</p>
                    <div onSubmit={this.onFormSubmit}>
                        <InputFiles accept=".mp4, .ogg," type="file" name="file"/>
                        {this.state.complete && <BgMask><Loader>loading...</Loader></BgMask> }
                    </div>
                </DragArea >
                <FileUploadBtn onClick={this.handleUpload}>전송</FileUploadBtn>
            </UpLoadWraper>
        );
    }
}

export default withFirebase(UploadBase);

