import React from "react";

const App = (props) => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <h1>
        <Header course={course} />
      </h1>
      <p>
        <Content content={part1 + " " + exercises1} />
      </p>
      <p>
        <Content content={part2 + " " + exercises2} />
      </p>
      <p>
        <Content content={part3 + " " + exercises3} />
      </p>
      <p>
        <Total total={"Number of exercises: " + total} />
      </p>
      <br />
    </div>
  );
};

const Content = (props) => {
  return <div>{props.content}</div>;
};

const Header = (props) => {
  return <div>{props.course}</div>;
};

const Total = (props) => {
  return <div>{props.total}</div>;
};

export default App;
