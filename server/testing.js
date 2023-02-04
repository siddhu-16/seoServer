
// const cheerio = require('cheerio');
// const request = require('request');
// const fs = require('fs');

// request({
//     method: 'GET',
//     url: 'https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/'
// }, (err, res, body) => {
    
//     if (err) return console.error(err);

//     let $ = cheerio.load(body);

//     let post = {
//         title: $('h1').text(),
//         canonical: $('link[rel="canonical"]').attr('href'),
//         description: $('meta[name="description"]').attr('content'),
//         // Get OG Values
//         og_title: $('meta[property="og:title"]').attr('content'),
//         og_url: $('meta[property="og:url"]').attr('content'),
//         og_img: $('meta[property="og:image"]').attr('content'),
//         og_type: $('meta[property="og:type"]').attr('content'),
//         // Get Twitter Values
//         twitter_site: $('meta[name="twitter:site"]').attr('content'),
//         twitter_domain: $('meta[name="twitter:domain"]').attr('content'),
//         twitter_img_src: $('meta[name="twitter:image:src"]').attr('content'),
//         // Get Facebook Values
//         fb_appid: $('meta[property="fb:app_id"]').attr('content'),
//         fb_pages: $('meta[property="fb:pages"]').attr('content'),
//     }
//     // data.push(post)

//     console.log(post);

//     // fs.writeFile("log.json", JSON.stringify(data), function(err) {
//     //     if (err) return console.error(err);
//     //     console.log("Anoter post saved!");
//     // });

// });



axios.post('localhost:5000/api/', {
    URL: url
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


  axios.post('localhost:5000/api/keyword', {
    URL: url,
    keyword : keyword
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });