const request = require("request");
const cheerio = require('cheerio');
// const {writeParsedData, readParsedData } = require("../models/htmlData.js");


//custome middlewares
exports.getHtmlFile = (req, res, next) => {
    const URL = req.body.URL;
    request(URL, (err, response, html) => {
        if(err){
            return res.status(400).json({
            error: "No user was found in DB"
          });
        }
        console.log("response status code : " , response&&response.statusCode);
        const htmlCode = { code : html } 
        req.pageHTML = htmlCode;
        // res.send(req.pageHTML);
        next();
    });
};


//actual controllers
exports.parseHtmlFile = (req, res) => {
    //after parsing all the file , we create a object of all the data and through writeParsedData function
    // store into Database
    const $ = cheerio.load(req.pageHTML.code);
    const output = {
      metaInfo: {},
      internalLinks: [],
      externalLinks: [],
      href: 0,
      structure: 0,
      design: 0
    };

    //meta information extract
    output.metaInfo = {
      canonical: $('link[rel="canonical"]').attr('href'),
      description: $('meta[name="description"]').attr('content'),
      keywords : $('meta[name="keywords"]').attr('content'),

      // Get OG Values
      og_title: $('meta[property="og:title"]').attr('content'),
      og_url: $('meta[property="og:url"]').attr('content'),
      og_img: $('meta[property="og:image"]').attr('content'),
      og_type: $('meta[property="og:type"]').attr('content'),
      og_tag : $('meta[property="artice:tag"]').attr('content'),


      view_port : $('meta[name="viewport"]').attr('content'),
      title: $('title').text()
    }

    output.href = $('a').length
    output.structure = $('p, br').length
    output.design = $('div').length

  // Extract internal links
    const internalLinks = $("a[href^='/']");
    internalLinks.each((i, link) => {
      output.internalLinks.push($(link).attr('href'));
    });

  // Extract external links
    const externalLinks = $("a[href^='http']");
    externalLinks.each((i, link) => {
      output.externalLinks.push($(link).attr('href'));
    });

    res.send(output);
    // writeParsedData(dataObject);
};






