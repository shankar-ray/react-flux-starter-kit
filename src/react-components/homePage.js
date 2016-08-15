"use strict";

var React = require('react');

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Hello World</h1>
				<p> React, React Router, Flux, Visualforce Starter Template</p>
			</div>
		);
	}
});

module.exports = Home;