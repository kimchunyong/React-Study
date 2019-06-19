import React, { Component } from 'react';

class index extends Component {
    state = {
        image: '',
    }
    onChange(e) {
        const fileTypes = ['mp4', 'ogg'];

        let files = e.target.files,
            extension = files[0].name.split('.').pop().toLowerCase(),
            isSuccess = fileTypes.indexOf(extension) > -1;
        if (isSuccess) {
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
        } else {
            alert('파일 형식에 맞지 않습니다. mp4, ogg 형식의 파일을 올려주세요.');
        }
    }
    render() {
        return (
            <div onSubmit={this.onFormSubmit}>
                <input type="file" name="file" onChange={(e) => { this.onChange(e) }} />
            </div>
        );
    }
}

export default index;