// Define a function that takes a date as an argument
// and returns a string that represents how long ago the date was
/**
 * @module
 * @param {Date} date the date obj to check
 * @returns {string} string with the amount of time ago
 * @example
 * `timeAgo(Date.now() - 60 * 5 * 1000);`
 * //5 days ago
 *
 */
export const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years ago";
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }

  if (seconds < 10) return "just now";

  return Math.floor(seconds) + " seconds ago";
};

export default timeAgo;
