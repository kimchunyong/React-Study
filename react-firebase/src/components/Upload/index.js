import React, { Component } from 'react';

import {withFirebase} from '../Firebase';


class UploadBase extends Component {
    state = {
        fileName: '',
        progress: 0,
        error:false,
        complete:'',
    }

    onChange(e) {
        const fileTypes = ['mp4', 'ogg'];

        const files = e.target.files[0],
            extension = files.name.split('.').pop().toLowerCase(),
            isSuccess = fileTypes.indexOf(extension) > -1;
        if (isSuccess) {
            let reader = new FileReader();
            reader.readAsDataURL(files);

            this.setState({file:files});
        } else {
            alert('파일 형식에 맞지 않습니다. mp4, ogg 형식의 파일을 올려주세요.');
        }
    }

    handleUpload = (e) => {
        const { file } = this.state;
        this.props.firebase.upLoadTask(file);
            
        
    }

    render() {
        return (
            <div onSubmit={this.onFormSubmit}>
                <input type="file" name="file" onChange={(e) => { this.onChange(e) }} />
                <button onClick={this.handleUpload}>전송</button>
            </div>
        );
    }
}

export default withFirebase(UploadBase);

