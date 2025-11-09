import React, { Fragment } from "react";
import { Image } from "react-bootstrap";

const NewsDetailsLeft = ({ data }) => {
  const { thumbnail, title, html, categories = [], createdAt } = data;

  if (!html) {
    console.warn("No HTML content found for blog:", title);
    return <p>No content available.</p>;
  }

  // Unescape HTML entities and inject responsive image classes
  const formattedHtml = html
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/<img /g, '<img class="img-fluid" ');

  return (
    <div className="news-details__left">
      <div className="news-details__img">
        <Image src={thumbnail} alt={title || "blog image"} />
        <div className="news-one__date">
          <p>
            {new Date(createdAt)
              .toLocaleDateString("en-GB")
              .split("/")
              .map((t, i) => (
                <Fragment key={i}>
                  <span>{t}</span>
                </Fragment>
              ))}
          </p>
        </div>
      </div>

      <div className="news-details__content">
        <h3 className="news-details__title">{title}</h3>
        <div
          className="news-details__text"
          dangerouslySetInnerHTML={{ __html: formattedHtml }}
        />
      </div>

      {categories.length > 0 && (
        <div className="news-details__bottom">
          <p className="news-details__tags">
            <span>Tags:</span>
            {categories.map((tag, i) => (
              <a key={i} href="#">
                {tag.name}
              </a>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsDetailsLeft;
