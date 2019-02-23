class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.videos({'key':YOUTUBE_API_KEY, 'query': 'React'}, (data) => {console.log(data)}));
    this.state = {
      videos: props.videos,
      currentVideo: props.videos[0],
    };
  }

  // _searchYoutube(query) {
  //   var options= {
  //     key: this.props.API_KEY,
  //     query: query
  //   }
  //   this.setState(() => {
  //     videos: props.videos()
  //   })
  // }

  clickHandler(video) {
    // console.log(this);
    this.setState((state) => ({
      currentVideo: video,
    }));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <h5>
                <em>search</em> view goes here
              </h5>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer video={this.state.currentVideo} state={this.state} />
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList
                videos={this.state.videos}
                state={this.state}
                clickHandler={this.clickHandler.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
