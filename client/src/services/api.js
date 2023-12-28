import axios from "axios"
import { getUserData} from './storage'
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = "AIzaSyDOAIpSKqsbsTFRdhb09uMo4_hkgQ7KJYQ"
const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`;
const LOGIN_URL = `/accounts:signInWithPassword?key=${API_KEY}`;
const USER_DETAILS_URL = `/accounts:lookup?key=${API_KEY}`;

const firebaseConfig = {
    apiKey: "AIzaSyDOAIpSKqsbsTFRdhb09uMo4_hkgQ7KJYQ",
    authDomain: "flight-booking-4d804.firebaseapp.com",
    databaseURL:"https://flight-booking-4d804-default-rtdb.firebaseio.com",
    projectId: "flight-booking-4d804",
    storageBucket: "flight-booking-4d804.appspot.com",
    messagingSenderId: "749628065648",
    appId: "1:749628065648:web:eb63f2d52f0170cbbbb1b5",
    measurementId: "G-NZ4C9N5573"
  };
  

export const RegisterApi = (inputs)=>{
    let data  = {displayName:inputs.name,email:inputs.email,password:inputs.password }
    return axios.post(REGISTER_URL,data)
}
export const LoginApi = (inputs)=>{
    let data  = {email:inputs.email,password:inputs.password }
    return axios.post(LOGIN_URL,data)
}
export const UserDetailsApi = ()=>{
    let data = {idToken:getUserData()}
    return axios.post(USER_DETAILS_URL,data)
}
const app = initializeApp(firebaseConfig);
// Export the Firebase database instance
export const database = getDatabase(app);
export { app };