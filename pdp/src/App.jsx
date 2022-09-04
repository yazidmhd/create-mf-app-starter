import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";
import "./index.scss";

// asynchornous
// dynamic import --> async dynamic import
// const Header = React.lazy(() => import("home/Header"));
// const Footer = React.lazy(() => import("home/Footer"));
import Header from "home/Header";
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";
import PDPContent from "./PDPContent";

const App = () => (
  <Router>
    <div className="mt-5 text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Switch>
          <Route path="/product/:id" component={PDPContent} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

// const App = () => (
//   <div className="mt-5 text-3xl mx-auto max-w-6xl">
//     <SafeComponent>
//       <Header />
//     </SafeComponent>
//     <div className="my-10">
//       <PDPContent />
//     </div>
//     <Footer />
//   </div>
// );

// const App = () => (
//   <div className="mt-5 text-3xl mx-auto max-w-6xl">
//     <Suspense fallback={<div>Loading</div>}>
//       <Header />
//     </Suspense>
//     <div className="my-10">PDP Page Content</div>
//     <Footer />
//   </div>
// );
ReactDOM.render(<App />, document.getElementById("app"));
