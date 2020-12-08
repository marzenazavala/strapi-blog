import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ArticlesComponent from "../components/Articles/articles";
import "../assets/css/main.css";
import '../assets/fonts/1942.ttf';
import '../assets/fonts/Shadowed Germanica.ttf';
import '../assets/fonts/Moms_typewriter.ttf'
import { BrowserRouter } from 'react-router-dom';
import LandingPage from "../sections/landingPage/LandingPage";
import Partners from "../sections/partners/Partners";


const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <BrowserRouter>
    <LandingPage />
    <Layout seo={data.strapiHomepage.seo} className='parallax'>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <ArticlesComponent title={data.strapiHomepage.hero.title} articles={data.allStrapiArticle.edges} />
        </div>
      </div>
    </Layout>
    <Partners />
  </BrowserRouter>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
    allStrapiArticle(filter: { status: { eq: "published" } }) {
      edges {
        node {
          description
          strapiId
          slug
          title
          category {
            name
          }
          publishedAt
          image {
            childImageSharp {
              fixed(width: 800, height: 500) {
                src
              }
            }
          }
          author {
            name
            picture {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
