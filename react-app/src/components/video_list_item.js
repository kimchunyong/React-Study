import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    <li onClick={() => onVideoSelect(video)} className='card'>
      <div className='video-list-media'>
        <div className='media-left'>
          <img className='card-img-top' src={imgUrl} alt={title} />
        </div>
        <div className='card-body'>
          <div className='card-title'>{title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
