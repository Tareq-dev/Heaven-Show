import React from "react";
import Footer from "../Footer/Footer";
import NavPage from "../NavPage/NavPage";

const Blog = () => {
  return (
    <div>
      <NavPage />
      <h3 className="text-center mt-5 text-primary">
        Frequently Asked Questions
      </h3>
      <div className="px-5 mt-5">
        <h3> 1 . Difference between authorization and authentication?</h3>
        <p>
          Simply expressed, authentication is the process of confirming a
          person's identity, whereas authorization is the process of confirming
          a user's access to certain apps, files, and data. The scenario is
          similar to that of an airline deciding which passengers can board.
          Authentication, for example, is the process of checking and confirming
          an employee's ID and passwords in an organization, whereas
          authorisation is the process of identifying which employee has access
          to which level. Let's pretend you're traveling and about to board a
          plane.
        </p>
      </div>
      <div className="px-5">
        <h3>
          2 . Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          Authentication, for example, is the process of checking and confirming
          an organization's employee IDs and passwords, whereas authorisation is
          the process of identifying which employee has access to which level.
          Assume you're on the verge of boarding a plane. Firebase
          Authentication makes it easier to get your users signed-in without
          having to understand the complexities behind implementing your own
          authentication system.
        </p>
      </div>
      <div className="px-5">
        <h3>
          3 . What other services does firebase provide other than
          authentication ?
        </h3>
        <p>
          There are many services which Firebase provides, Most useful of them
          are:
          <li>Cloud Firestore.</li>
          <li>Cloud Functions.</li>
          <li>Authentication.</li>
          <li>Hosting.</li>
          <li>Cloud Storage.</li>
          <li>Google Analytics.</li>
          <li> Predictions.</li>
          <li> Cloud Messaging.</li>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
