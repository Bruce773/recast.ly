// TODO: Render the `App` component to the DOM

ReactDOM.render(
  <App
    videos={searchYouTube({ key: YOUTUBE_API_KEY, query: 'React' }, (data) =>
      console.log(data)
    )}
  />
);
