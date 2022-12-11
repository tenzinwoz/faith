import React, { useEffect, useState } from "react";
import DetailsPageHero from "../../components/detailsPageHero/DetailsPageHero";
import { useLocation } from "react-router-dom";
import SinglePageData from "./components/SinglePageData";

export default function SinglePageEvent() {
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(location?.state?.data);
  }, [location?.state?.data]);

  console.log({ data });

  return (
    <>
      {!!data ? (
        <>
          <DetailsPageHero children={data?.title} imageUrl={data?.img} />

          <SinglePageData data={data} />
        </>
      ) : (
        "Loading"
      )}
    </>
  );
}
