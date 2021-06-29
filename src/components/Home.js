import React from "react";
import Banner from "./Banner";
import SingleRow from "./SingleRow";
import Footer from "./Footer";
import {
  ROMANCE,
  POPULAR,
  UPCOMING,
  TOP_RATED,
  LATEST_TV,
  TOP_RATED_TV,
  HORROR_MOVIE,
  ACTION_MOVIE,
  DOCUMENTRIES,
} from "./Config";

function Home() {
  return (
    <>
      <Banner />
      <SingleRow
        title="Popular Movies"
        fetchurl={POPULAR}
        isLargeRow={true}
      />
      <SingleRow
        title="Upcoming Movies"
        fetchurl={UPCOMING}
      />
      <SingleRow
        title="New Released Movie And TvSeries"
        fetchurl={LATEST_TV}
      />
      <SingleRow
        title="Action Movies"
        fetchurl={ACTION_MOVIE}
        isLargeRow={true}
      />
      <SingleRow
        title="Romance Movies"
        fetchurl={ROMANCE}
      />
      <SingleRow
        title="Top Rated Movies"
        fetchurl={TOP_RATED}
      />
      <SingleRow
        title="Top Rated Tv Series"
        fetchurl={TOP_RATED_TV}
        isLargeRow={true}
      />
      <SingleRow
        title="Horror Movies"
        fetchurl={HORROR_MOVIE}
      />
      <SingleRow
        title="Documentries"
        fetchurl={DOCUMENTRIES}
      />
      <Footer />
    </>
  );
}

export default Home;
