import React from "react";
import PropTypes from "prop-types";
import { ShowsPageTemplate } from "../../templates/shows-page";

const ShowsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <ShowsPageTemplate
        pastShowPosters={data.pastShowPosters}
        title={data.title}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

ShowsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ShowsPagePreview;
