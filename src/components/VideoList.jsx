var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((item) => (
      <VideoListEntry
        state={props.state}
        video={item}
        clickHandler={props.clickHandler}
      />
    ))}
  </div>
);

// PropTypes tell other developers what `props` a component expects
