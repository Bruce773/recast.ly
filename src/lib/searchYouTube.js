var searchYouTube = (options, callback) => {
  // TODO
  // var optionsObj = {
  //   url: 'https://www.googleapis.com/youtube/v3/search', // idea
  //   data: {
  //     q: options.query,
  //     maxResults: options.max,
  //     key: options.key,
  //     part: 'snippet',
  //     type: 'video',
  //     videoEmbeddable: 'true',
  //   },
  //   type: 'GET',
  //   success: (data) => {
  //     // console.log(data.items);
  //     callback(data.items);
  //   },
  //   error: (err) => {
  //     console.log(err + ': This is an error');
  //   },
  // };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'maxResults': options.max,
      'part': 'snippet',
      'type': 'video',
      'q': options.query,
      'key': options.key
    },
    success: function (data) {
      callback(data.items);
    },
  });
};

window.searchYouTube = searchYouTube;
