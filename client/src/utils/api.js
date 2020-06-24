import axios from 'axios';


//why was it necessary for me to have axios.get('/posts') instead of axios.get('/')
export default {
	getPosts: () => {
		console.log('inside getPosts');
		return axios.get('/posts')
	}


};
