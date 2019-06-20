import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import styled, { keyframes } from 'styled-components';

const DragArea = styled.div`
    position:relative;
    border: 1px dashed #ccc;
    border-radius: 15px;
    width: 90%;
    margin: 50px auto;
    padding: 20px;
    text-align: center;
`

const InputFiles = styled.input`
    display:none;
`

const FileUploadBtn = styled.button`
    display: inline-block;
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
            this.props.firebase.upLoadTask(fileBolb);
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

    onChange(e) {
        const fileTypes = ['mp4', 'ogg'];

        const files = e.target.files[0],
            extension = files.name.split('.').pop().toLowerCase(),
            isSuccess = fileTypes.indexOf(extension) > -1;
        if (isSuccess) {
            let reader = new FileReader();
            reader.readAsDataURL(files);

            this.setState({ file: files });
        } else {
            alert('파일 형식에 맞지 않습니다. mp4, ogg 형식의 파일을 올려주세요.');
            this.setState({ file: files });
        }
    }

    handleUpload = (e) => {
        const { file } = this.state;

        this.props.firebase.upLoadTask(file);
    }

    render() {
        return (
            <DragArea className="drop-area" ref={this.dropRef}>
                <p>파일을 넣어주세요.</p>
                <div onSubmit={this.onFormSubmit}>
                    <InputFiles type="file" name="file" onChange={(e) => { this.onChange(e) }} />
                    <FileUploadBtn onClick={this.handleUpload}>전송</FileUploadBtn>
                    {this.state.complete && <Loader>loading...</Loader>}
                </div>
            </DragArea >
        );
    }
}

export default withFirebase(UploadBase);

