var searchYouTube = (options, callback) => {
  // TODO
  var optionsObj = {
    q: options.query,
    maxResults: options.max,
    key: options.key,
    part: 'snippet',
    type: 'video',
  };

  if (!options.max) {
    optionsObj.maxResults = 5;
  }

  $.get('https://www.googleapis.com/youtube/v3/search', function(data) {
    callback(data);
  });
};

window.searchYouTube = searchYouTube;
