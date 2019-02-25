class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
    };
  }

  _youTubeSearch(query) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: query,
    };

    this.props.searchYouTube(options, (data) => {
      this.setState({
        videos: data,
        currentVideo: data[0],
      });
    });
  }

  componentDidMount() {
    this._youTubeSearch('React JS');
  }

  //! Old code!
  // componentDidMount() {
  //   this.setState({
  //     videos: this.props.videos({ key: YOUTUBE_API_KEY, query: 'React' }, (data) => {
  //       console.log(data);
  //       return data;
  //     }),
  //     currentVideo: this.props.videos(
  //       { key: YOUTUBE_API_KEY, query: 'React' },
  //       (data) => {
  //         console.log(data);
  //         return data[0];
  //       }
  //     ),
  //   });
  // }

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
