import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  render () {
    const videoList = this.props.videos;
    const videoItems = videoList.map(video => {
      return <VideoListItem key={video.etag} video={video} />;
    });
    return <ul className='col-md-4 list-group'>{videoItems}</ul>;
  }
}

export default VideoList;
