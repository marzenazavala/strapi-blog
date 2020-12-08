import React from "react";
import Card from "../Card/card";
import Nav from "../nav";
import './articles.styles.css';
import moment from 'moment';
import 'moment/locale/pl'

const Articles = ({ articles, title }) => {
  console.log(articles);
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  const date = moment().locale('pl').format('LL');

  const firstColumn = articles.slice(0, 3);
  const secondColumn = articles.slice(3, 6);
  const thirdColumn = articles.slice(6, 9);

  return (
    <div className='uk-container'>
      <div className='old-paper'>
        <div className=''>
          <h1 className='uk-text-center'>{title}</h1>
          <h3 className='uk-text-center'>Zaginione Laboratorium Hitlera</h3>
            <div>{date}</div>
          <Nav />
          <div className='uk-grid'>
            <div className='uk-width-1-3'>
              {firstColumn.map((article, i) => {
                return (
                <Card 
                  article={article}
                  key={article.node.slug}
                />
                );
              })}
            </div>
            <div className='uk-width-1-3'>
                {secondColumn.map((article, i) => {
                  return (
                  <Card 
                    article={article}
                    key={article.node.slug}
                  />
                  );
                })}
            </div>
            <div className='uk-width-1-3 uk-width-small-1-1 uk-width-medium-1-2'>
                {thirdColumn.map((article, i) => {
                  return (
                  <Card 
                    article={article}
                    key={article.node.slug}
                  />
                  );
                })}
            </div>
          </div>

          {/* <div className="uk-child-width-1-2@m uk-align-center news-content" data-uk-grid="true" >
            <div>
              {leftArticles.map((article, i) => {
                return (
                  <Card
                    article={article}
                    key={`article__left__${article.node.slug}`}
                  />
                );
              })}
            </div>
            <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                {rightArticles.map((article, i) => {
                  return (
                    <Card
                      article={article}
                      key={`article__right__${article.node.slug}`}
                    />
                  );
                })}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Articles;
