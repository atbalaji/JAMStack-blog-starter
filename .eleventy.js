const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/assets');

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addCollection('formattedPosts', function (collection) {
    return collection.getAll().map((post) => {
      // Add a formattedDate property to each post
      post.data.formattedDate = DateTime.fromJSDate(post.date).toLocaleString(DateTime.DATE_MED);
      return post;
    });
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};