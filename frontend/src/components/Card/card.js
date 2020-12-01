import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import './card.style.css';

const Card = ({ article }) => {
  console.log(article);
  return (
    <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top img-sepia">
          <Img
            fixed={article.node.image.childImageSharp.fixed}
            imgStyle={{ position: "static" }}
          />
        </div>
        <div className="uk-card-body">
          <p id="title" className="uk-text-large">
            {article.node.title}
          </p>
          <p id="description" className="uk-text-small uk-text-light uk-text-justify">
            {article.node.description}
          </p>
          <div>
            <hr className="uk-divider-small" />
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
