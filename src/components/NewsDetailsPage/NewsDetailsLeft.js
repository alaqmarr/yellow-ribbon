import newsDetailsPage from "@/data/newsDetailsPage";
import Link from "next/link";
import React, { Fragment } from "react";
import { Image } from "react-bootstrap";
import AuthorOne from "./AuthorOne";
import CommentForm from "./CommentForm";
import CommentOne from "./CommentOne";

const NewsDetailsLeft = ({ data }) => {
  const { thumbnail, title, author, images, html, categories, createdAt } =
    data;
  return (
    <div className="news-details__left">
      <div className="news-details__img">
        <Image src={thumbnail} alt="" />
        <div className="news-one__date">
          <p>
            {new Date(createdAt)
              .toLocaleString("en-US", {})
              .split(",")[0]
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
        <p
          className="news-details__text"
          dangerouslySetInnerHTML={{ __html: html }}
        ></p>
      </div>
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
    </div>
  );
};

export default NewsDetailsLeft;
