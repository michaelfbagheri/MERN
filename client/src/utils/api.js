import axios from 'axios';



export default {
	getPosts: ()=>{ 
		console.log('inside getPosts');
		return axios.get('/')
	}


};
