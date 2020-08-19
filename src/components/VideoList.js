import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const listofVideos = videos.map((video, id) => {
    return <VideoItem key={id} onVideoSelect={onVideoSelect} video={video} />;
  });
  return (
    <Grid container spacing={10}>
      {listofVideos}
    </Grid>
  );
};

export default VideoList;
