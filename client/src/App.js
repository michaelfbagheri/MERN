import React,{Component} from 'react';

import './App.css';
import API from './utils/api';

class App extends Component {
  state = {
	author:'',
	post: []
  };


componentDidMount(){
	API.getPosts().then(res => console.log('this data came back from axios',res.data)).catch(err => console.log(err))
	};


render(){
	return (
		<div calssName= "App">
			<div>test</div>
		</div>
	)
	}
}

export default App;
