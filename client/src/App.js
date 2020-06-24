import React, { Component } from 'react';

import './App.css';
import API from './utils/api';

class App extends Component {
	state = {
		author: '',
		post: []
	};


	componentDidMount() {
		API.getPosts().then(res => {
			console.log(res.data)
			this.setState({ post: res.data });
		}).catch(err => console.log(err))
	};


	render() {
		return (
			<div className="App">
				<div>
					<ul>
						{this.state.post && this.state.post.map((rec) => {
							return <li key={rec._id}>{rec.name}</li>
						})}
					</ul>
				</div>
			</div>
		)
	}
}

export default App;
