import React, { Component } from 'react';

class SelectPop extends Component {
    render() {
        return (
            <div className="slc__list-pop">
                <ul>
                    <li data-lang="kr"><a href="#n">한국어</a></li>
                    <li data-lang="en"><a href="#n">영어</a></li>
                    <li data-lang="jp"><a href="#n">일본어</a></li>
                    <li data-lang="cn"><a href="#n">중국어</a></li>
                    <li data-lang="vi"><a href="#n">배트남어</a></li>
                    <li data-lang="id"><a href="#n">인도네시아어</a></li>
                    <li data-lang="ar"><a href="#n">아랍어</a></li>
                    <li data-lang="bn"><a href="#n">뱅갈어</a></li>
                    <li data-lang="de"><a href="#n">독일어</a></li>
                    <li data-lang="es"><a href="#n">스페인어</a></li>
                </ul>
            </div>
        );
    }
}

export default SelectPop;