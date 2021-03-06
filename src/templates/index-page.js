import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";

export const IndexPageTemplate = ({ videoEmbedCode }) => (
  <div className="bodywrap">
    <div className="home-video-wrapper videoWrapper">
      <HTMLContent content={videoEmbedCode} />
    </div>

    {/* <div className="row">
      <div className="grid12 banner-wrapper">
        <img
          className="topmargmobile"
          style={{ width: "100%" }}
          src={
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          }
          alt="the evictions"
        />
      </div>
    </div>
    <h2 className="banner-headline">{heading}</h2> */}

    {/* {albums.map((album, i) => (
      <div className="row" key={`album.text-${i}`}>
        <div className="grid12">
          <a href={album.url} target="_blank">
            <Img fluid={album.image.childImageSharp.fluid} />
          </a>
          <h3 className="has-text-centered has-text-white">{album.text}</h3>
        </div>
      </div>
    ))} */}
  </div>
  // <div>
  //   <div
  //     className="full-width-image margin-top-0"
  //     style={{
  //       backgroundImage: `url(${
  //         !!image.childImageSharp ? image.childImageSharp.fluid.src : image
  //       })`,
  //       backgroundPosition: `top left`,
  //       backgroundAttachment: `fixed`
  //     }}
  //   >
  //     <div
  //       style={{
  //         display: "flex",
  //         height: "150px",
  //         lineHeight: "1",
  //         justifyContent: "space-around",
  //         alignItems: "left",
  //         flexDirection: "column"
  //       }}
  //     >
  //       <h1
  //         className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
  //         style={{
  //           boxShadow:
  //             "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
  //           backgroundColor: "rgb(255, 68, 0)",
  //           color: "white",
  //           lineHeight: "1",
  //           padding: "0.25em"
  //         }}
  //       >
  //         {title}
  //       </h1>
  //       <h3
  //         className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
  //         style={{
  //           boxShadow:
  //             "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
  //           backgroundColor: "rgb(255, 68, 0)",
  //           color: "white",
  //           lineHeight: "1",
  //           padding: "0.25em"
  //         }}
  //       >
  //         {subheading}
  //       </h3>
  //     </div>
  //   </div>
  //   <section className="section section--gradient">
  //     <div className="container">
  //       <div className="section">
  //         <div className="columns">
  //           <div className="column is-10 is-offset-1">
  //             <div className="content">
  //               <div className="content">
  //                 <div className="tile">
  //                   <h1 className="title">{mainpitch.title}</h1>
  //                 </div>
  //                 <div className="tile">
  //                   <h3 className="subtitle">{mainpitch.description}</h3>
  //                 </div>
  //               </div>
  //               <div className="columns">
  //                 <div className="column is-12">
  //                   <h3 className="has-text-weight-semibold is-size-2">
  //                     {heading}
  //                   </h3>
  //                   <p>{description}</p>
  //                 </div>
  //               </div>
  //               <Features gridItems={intro.blurbs} />
  //               <div className="columns">
  //                 <div className="column is-12 has-text-centered">
  //                   <Link className="btn" to="/products">
  //                     See all products
  //                   </Link>
  //                 </div>
  //               </div>
  //               <div className="column is-12">
  //                 <h3 className="has-text-weight-semibold is-size-2">
  //                   Latest stories
  //                 </h3>
  //                 <BlogRoll />
  //                 <div className="column is-12 has-text-centered">
  //                   <Link className="btn" to="/blog">
  //                     Read more
  //                   </Link>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        videoEmbedCode={frontmatter.videoEmbedCode}
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        albums={frontmatter.albums}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        videoEmbedCode
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        albums {
          image {
            childImageSharp {
              fluid(maxWidth: 1600, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
          url
        }
      }
    }
  }
`;
