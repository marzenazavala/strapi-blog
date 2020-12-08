import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import './card.style.css';
import Moment from "react-moment";

const Card = ({ article }) => {
  console.log(article);
  return (
    <Link to={`/article/${article.node.slug}`} className="uk-link-reset cursor">
      <div className="uk-card uk-card-muted">
        <div className='border'>
          <div className="uk-card-media-top img-sepia">
          {article.node.image && (
            <Img
              fixed={article.node.image.childImageSharp.fixed}
              imgStyle={{ position: "static" }}
            />)}
          </div>
        </div>
        <div className="uk-card-body">
          <p className="uk-text-meta uk-margin-remove-top">
            <Moment format="MMM Do YYYY">{article.node.publishedAt}</Moment>
          </p>
          <div className='border-bottom' />
          <p id="title" className="uk-text-large">
            {article.node.title}
          </p>
          <p id="description" className="uk-text-small uk-text-light uk-text-justify">
            {article.node.description}
          </p>
          <div className='border-bottom' />
          <div>

            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              {/* <div>
                {article.node.author.picture && (
                  <Img
                    fixed={article.node.author.picture.childImageSharp.fixed}
                    imgStyle={{ position: "static", borderRadius: "50%" }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  {article.node.author.name}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
