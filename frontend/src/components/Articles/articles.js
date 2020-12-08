import React from "react";
import Card from "../Card/card";
import './articles.styles.css';
import moment from 'moment';
import 'moment/locale/pl'
import BlogNavBar from '../BlogLayout/BlogNavBar';

const Articles = ({ articles, title }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  const date = moment().locale('pl').format('LL');
  const firstColumn = articles.slice(0, 3);
  const secondColumn = articles.slice(3, 12);

  return (
    <div>
      <div className='old-paper'>
      <h1 className='uk-text-center'>{title}</h1>
      <h4 className='uk-text-center'>Zaginione Laboratorium Hitlera</h4>
      <div>{date}</div>
      <BlogNavBar />
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {firstColumn.map((article, i) => {
            return (
              <Card
                article={article}
                key={`article__left__${article.node.slug}`}
              />
            );
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {secondColumn.map((article, i) => {
              return (
                <Card
                  article={article}
                  key={`article__right__${article.node.slug}`}
                />
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Articles;