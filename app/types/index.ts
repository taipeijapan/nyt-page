type NYTArticle = {
  _id: string;
  headline: {
    main: string;
  };
  snippet: string;
  multimedia: {
    thumbnail: {
      url: string;
      caption: string;
    };
  };
  web_url: string;
}

export type {
  NYTArticle
}