// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactToPdf from "react-to-pdf";

const Blog = () => {
  const ref = React.createRef();
  return (
    <div className="my-container">
      <div ref={ref}>
        <h1 className=" text-center text-orange-600 font-bold text-5xl my-5">
          Question Answer <hr />{" "}
        </h1>

        <div className="card w-full bg-base-100 shadow-xl my-5">
          <div className="card-body">
            <h2 className="card-title text-3xl text-orange-600 font-semibold">
              1. Tell us the differences between uncontrolled and controlled
              components?
            </h2>
            <p className="text-lg">
              Controlled components are typically used in situations where the
              state of a user interface element needs to be managed and updated
              by a higher-level component. In this approach, the components
              state is kept in sync with the parent component by passing props
              and callbacks. This means that the higher-level component has full
              control over the behavior and appearance of the child component.In
              contrast, uncontrolled components allow the component to manage
              its own state without intervention from the parent component. The
              state is usually stored internally using local state or refs. This
              approach is often used for simple form inputs where the state of
              the input does not need to be managed by a higher-level component.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl my-5">
          <div className="card-body">
            <h2 className="card-title text-3xl text-orange-600 font-semibold">
              2. How to validate React props using PropTypes?
            </h2>
            <p className="text-lg">
              Install the PropTypes package.Import the PropTypes
              packages.PropTypes are also objects with a key and a value pair
              where the ‘key’ is the name of the prop while the value represents
              the type or class by which they are defined.Define the propTypes
              Object.Validate the Props
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl my-5">
          <div className="card-body">
            <h2 className="card-title text-3xl text-orange-600 font-semibold">
              3. Tell us the difference between nodejs and express js?
            </h2>
            <p className="text-lg">
              Node.js is a runtime environment for JavaScript that provides a
              platform for building a wide range of applications, while
              Express.js is a web application framework built on top of Node.js
              that provides a set of tools and features for building web
              applications. While you can use Node.js to build a web application
              from scratch, using Express.js can simplify the process by
              providing a pre-built framework for handling common web
              development tasks.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl my-5">
          <div className="card-body">
            <h2 className="card-title text-3xl text-orange-600 font-semibold">
              1. What is a custom hook, and why will you create a custom hook?
            </h2>
            <p className="text-lg">
              Castom hooks create a react project to makes the code cleaner and
              reduces the time to write the code.Custom hooks provide a way to
              extract logic from a component and encapsulate it into a reusable
              function. This allows you to avoid duplicating code and keep your
              codebase more organized
            </p>
          </div>
        </div>
      </div>

      <div className=" text-center mb-5">
        <ReactToPdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="btn bg-orange-600 px-4 py-2 text-xl font -bold"
            >
              Download pdf
            </button>
          )}
        </ReactToPdf>
      </div>
    </div>
  );
};

export default Blog;
