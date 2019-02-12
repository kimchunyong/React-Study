import React, { Component } from 'react';

class VideoListItem extends Component {
  render () {
    const { video } = this.props;
    const imgUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
      <li className='card'>
        <div className='video-list-media'>
          <div className='media-left'>
            <img className='card-img-top' src={imgUrl} />
          </div>
          <div className='card-body'>
            <div className='card-title'>{title}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
