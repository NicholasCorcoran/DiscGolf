import axios from 'axios';

export const chronoFirebase = axios.create({baseURL: 'https://chronodiscgolf-d5454-default-rtdb.firebaseio.com'})