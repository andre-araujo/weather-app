function imageFactory(resp = {}) {
  if (!resp.images || !resp.images[0]) {
    return null;
  }

  const {
    url,
  } = resp.images[0];

  return ({ imageURL: `https://www.bing.com/${url}` });
}

export default imageFactory;
