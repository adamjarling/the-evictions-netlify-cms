import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";

export const PhotosPageTemplate = ({ title, items = [] }) => (
  <div className="fullpage bg">
    <div className="bodywrap">
      <h1 className="colwhite center subtit">{title}</h1>
      <div className="columns is-multiline">
        {items.map(item => (
          <div className="column is-half">
            <Img fluid={item.image.childImageSharp.fluid} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

PhotosPageTemplate.propTypes = {
  title: PropTypes.string
};

const PhotosPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PhotosPageTemplate title={frontmatter.title} items={frontmatter.items} />
    </Layout>
  );
};

PhotosPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default PhotosPage;

export const pageQuery = graphql`
  query PhotosPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "photos-page" } }) {
      frontmatter {
        title
        items {
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
