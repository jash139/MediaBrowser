import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";

import Home from "./Home";
import MediaDetailsPage from "./MediaDetailsPage";
import SearchResults from "./SearchResults";
import CastDetails from "./CastDetails";

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/details/:mediaType/:mediaId" exact component={MediaDetailsPage} />
      <Route path="/search/:query" exact component={SearchResults} />
      <Route path="/PERSON/:id" exact component={CastDetails} />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps,)(App));
