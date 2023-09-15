export default (str, url, id) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/xml');
  const parseError = doc.querySelector('parsererror');
  if (parseError) {
    throw new Error('parsererror');
  }
  const feed = {
    titleFeed: doc.querySelector('channel title:first-of-type').textContent,
    descriptionFeed: doc.querySelector('channel description:first-of-type').textContent,
    linkFeed: url,
  };
  const items = doc.querySelectorAll('item');
  const posts = [...items].map((item) => {
    const titlePost = item.querySelector('title').textContent;
    const descriptionPost = item.querySelector('description').textContent;
    const linkPost = item.querySelector('link').textContent;
    return {
      titlePost,
      descriptionPost,
      linkPost,
    };
  });

  return id ? { id, feed, posts } : { feed, posts };
};
