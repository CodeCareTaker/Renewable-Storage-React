import React from 'react';
import ReactDOM from 'react-dom';
import RSMain from "./RSMain";
import RSFooter from "./RSFooter";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './fonts.css';

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <RSMain/>
	<RSFooter/>
  </div>,
  destination
);