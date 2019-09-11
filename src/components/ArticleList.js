import React from 'react';

const ArticleList = props => {
  console.log(props);

  return (
    <div>
      {props.articles.map(item => (
        <p>
          <a
            style={{ textDecoration: 'none', color: '#000000' }}
            href={item.url}
          >
            {item.name}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ArticleList;

// {name: "US v. Huawei: 4 key takeaways from the indictments",
// url: "https://www.channel3000.com/news/technology/us-v-h…ei-4-key-takeaways-from-the-indictments/994296644",
// description: "(CNN) - The United States just offered a rare glim…ictments released late Monday, US prosecutors ...",
// provider: Array(1), datePublished: "2019-01-29T13:34:00.0000000Z"}, {name: ...}
