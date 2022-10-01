import React from "react";
import UseEffect from "./UseEffect";
import UseReducer from "./UseReducer";
import UseState from "./UseState";

const Day_3 = () => {
  return (
    <>
      <div className="title_container">
        <div className="container_div_questins_ans">
          <h2 className="day_title">Day-3 👍</h2>
          <h3 className="questions_1">1.Difference between Axios and fetch.</h3>
          <h2>Axios :</h2>

          <p className="ans_question1">
            Axios is a Javascript library used to make HTTP requests from
            node.js or XMLHttpRequests from the browser and it supports the
            Promise API that is native to JS ES6. It can be used intercept HTTP
            requests and responses and enables client-side protection against
            XSRF. It also has the ability to cancel requests. EX::
            axios.get('url') .then((response) =&gt; {"{"} <br />
            ➡️ <br /> <br />
            // Code for handling the response <br />
            {"}"}) <br></br>
            .catch((error) ={">"} {"{"} <br />
            // Code for handling the error <br></br>
            {" }"})
          </p>
          <h2>Fetch:</h2>
          <p>
            {" "}
            The Fetch API provides a fetch() method defined on the window
            object. It also provides a JavaScript interface for accessing and
            manipulating parts of the HTTP pipeline (requests and responses).
            The fetch method has one mandatory argument- the URL of the resource
            to be fetched. This method returns a Promise that can be used to
            retrieve the response of the request. EX::
            fetch('path-to-the-resource-to-be-fetched') .then((response) ={
              ">"
            }{" "}
            {"{"}
          </p>
          <p>
            {" "}
            // Code for handling the response <br />
            {"}"}) <br />
            .catch((error) ={">"} {"{"} <br />
            // Code for handling the error <br />
            {"}"});
          </p>
          <table id="customers">
            <tr style={{ visibility: "" }}>
              <th>Axios</th>
              <th>Fetch</th>
            </tr>
            <tr>
              <td>Axios has url in request object.</td>
              <td>Fetch has no url in request object.</td>
            </tr>
            <tr>
              <td>
                Axios is a stand-alone third party package that can be easily
                installed.
              </td>
              <td>
                Fetch is built into most modern browsers; no installation is
                required as such.
              </td>
            </tr>
            <tr>
              <td>Axios enjoys built-in XSRF protection.</td>
              <td>Fetch does not.</td>
            </tr>
            <tr>
              <td>Axios uses the data property</td>
              <td>Fetch uses the body property.</td>
            </tr>
            <tr>
              <td>Axios' data contains the object.</td>
              <td>Fetch's body has to be stringified.</td>
            </tr>
            <tr>
              <td>
                Axios request is ok when status is 200 and statusText is{" "}
                <q>OK</q>.
              </td>
              <td>
                Fetch request is ok when response object contains the ok
                property.
              </td>
            </tr>
            <tr>
              <td>Axios performs automatic transforms of JSON data.</td>
              <td>
                Fetch is a two-step process when handling JSON data- first, to
                make the actual request; second, to call the .json() method on
                the response.
              </td>
            </tr>
            <tr>
              <td>Axios allows cancelling request and request timeout.</td>
              <td>Fetch does not.</td>
            </tr>
            <tr>
              <td>Axios has the ability to intercept HTTP requests.</td>
              <td>
                Fetch, by default, doesn’t provide a way to intercept requests.
              </td>
            </tr>
          </table>
          <h4 style={{ borderBottom: "1px solid gray", paddingBottom: "5px" }}>
            Which one is library or framework?
          </h4>
          <p>
            React is an open source JavaScript framework, that isn't actually a
            framework. But it is currently the most commonly used front-end
            development technology in the world. React, originally developed by
            and still maintained by Facebook and supported by an active open
            source community, is in fact a JS 'library'. React Native is a
            JavaScript framework for writing real, natively rendering mobile
            applications for iOS and Android. It's based on React, Facebook's
            JavaScript library for building user interfaces, but instead of
            targeting the browser, it targets mobile platforms.
          </p>
          <h4 style={{ borderBottom: "1px solid gray", paddingBottom: "5px" }}>
            Why is react a library and react-native a framework?
          </h4>
          <p>
            Reactjs, eventually, is a JavaScript library, which enables the
            programmer to create an engaging and high performing UI Layer while
            React Native is an entire framework for building cross-platform
            apps, be it web, iOS or Android.
          </p>
          <h3 className="questions_1">
            2.What is UseState Hook ?(Implementation) 👍
          </h3>
          <UseState />

          <h3
            className="questions_1"
            style={{ borderBottom: "1ps solid gray" }}
          >
            3.What is useEffect Hook ?(Implementation) 👍
          </h3>
          <UseEffect />

          <p>Please see in src folder --{">"} Routing Folder.. </p>
          <h3
            className="questions_1"
            style={{ borderBottom: "1ps solid gray" }}
          >
            4. What is UseReducer Hook ?(Implementation)
          </h3>
          <UseReducer />

          <h3 className="questions_1">
            4. What is UseMemo Hook ?(Implementation)
          </h3>
          <h1>smae As UseEffect....</h1>
          <h2>
            use:React has a built-in hook called useMemo that allows you to
            memoize expensive functions so that you can avoid calling them on
            every render. You simple pass in a function and an array of inputs
            and useMemo will only recompute the memoized value when one of the
            inputs has changed.
          </h2>
        </div>
      </div>
    </>
  );
};
export default Day_3;
