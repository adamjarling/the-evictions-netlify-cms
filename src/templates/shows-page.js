import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";

import Helmet from "react-helmet";

export const ShowsPageTemplate = ({ title, pastShowPosters = [] }) => (
  <>
    <Helmet>
      <script src="//widget.songkick.com/widget.js"></script>
    </Helmet>
    <div className="fullpage bg">
      <div className="bodywrap">
        <h1 className="colwhite center subtit">Shows</h1>

        <div className="row">
          <div className="grid12">
            <a
              href="http://www.songkick.com/artists/9049979"
              className="songkick-widget"
              data-theme="dark"
              data-detect-style="true"
              data-font-color="#fff"
              data-background-color="transparent"
            >
              The Evictions Shows
            </a>
          </div>
        </div>
        <h1 className="colwhite center subtit">Past Shows</h1>
        <div className="columns is-multiline">
          {pastShowPosters.map(item => (
            <div className="column is-half">
              <Img fluid={item.image.childImageSharp.fluid} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

ShowsPageTemplate.propTypes = {
  title: PropTypes.string
};

const ShowsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ShowsPageTemplate
        title={frontmatter.title}
        pastShowPosters={frontmatter.pastShowPosters}
      />
    </Layout>
  );
};

ShowsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ShowsPage;

export const pageQuery = graphql`
  query ShowsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "shows-page" } }) {
      frontmatter {
        title
        pastShowPosters {
          image {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
