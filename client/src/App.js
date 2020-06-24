import React, { Component } from 'react';
import PageWrapper from './wrapper';

import './App.css';
import API from './utils/api';
import pageWrapper from './wrapper';

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
				<PageWrapper>
					<div>
						<ul>
							{this.state.post && this.state.post.map((rec) => {
								return <li key={rec._id}>{rec.name}</li>
							})}
						</ul>
					</div>

				</PageWrapper>

			</div>
		)
	}
}

export default App;
