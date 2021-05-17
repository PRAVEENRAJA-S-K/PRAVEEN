import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const title = React.createElement( "h1", {}, "Days Of the week")
const daysOfTheWeek = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "Sunday"),
  React.createElement("li", null, "Monday"),
  React.createElement("li", null, "Tuesday"),
  React.createElement("li", null, "Wednesday"),
  React.createElement("li", null, "Thursday"),
  React.createElement("li", null, "Friday"),
  React.createElement("li", null, "Saturday")
)
const container = React.createElement('div', {}, [title, daysOfTheWeek])

ReactDOM.render(
  container,
  document.getElementById('root')
);
