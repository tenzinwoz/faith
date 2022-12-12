import React, { useEffect } from "react";

export default function SinglePageData({ content }) {
  return (
    <div className="container">
      <div className="singlepage-data section-pad">
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
}
