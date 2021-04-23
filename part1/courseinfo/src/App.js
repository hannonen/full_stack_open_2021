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
        <Content
          part1={part1}
          exercises1={exercises1}
          part2={part2}
          exercises2={exercises2}
          part3={part3}
          exercises3={exercises3}
        />
      </p>
      <p>
        <Total total={"Number of exercises: " + total} />
      </p>
      <br />
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part content={props.part1 + " " + props.exercises1} />
      <Part content={props.part2 + " " + props.exercises2} />
      <Part content={props.part3 + " " + props.exercises3} />
    </div>
  );
};

const Part = (props) => {
  return <div>{props.content}</div>;
};

const Header = (props) => {
  return <div>{props.course}</div>;
};

const Total = (props) => {
  return <div>{props.total}</div>;
};

export default App;
