var searchYouTube = (options, callback) => {
  // TODO
  var optionsObj = {
    url: 'https://www.googleapis.com/youtube/v3/search', // idea
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true',
    },
    success: function(data) {
      console.log(data.items);
      callback(data.items);
    },
    error: function(err) {
      console.log(err + ': This is an error');
    }
  };

  if (!options.max) {
    optionsObj.maxResults = 5;
  }

  $.get(optionsObj);

};

window.searchYouTube = searchYouTube;
