import React, { useEffect } from "react";

export default function SinglePageData({ content }) {
  return (
    <div className="container singlepage-data section-pad">
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}
