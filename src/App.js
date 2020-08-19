import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";

import youtube from "./api/youtube";
import VideoList from "./components/VideoList";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount() {
    this.handleSubmit("reactJS app");
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyC947hpEMPyYS-dga3gsyqbHkKHlEsq2iE",
        q: searchTerm,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <div>
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
