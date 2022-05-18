import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig'
import {getAuth} from 'firebase/auth'

const fireBaseApp = initializeApp(firebaseConfig);
export const Auth = getAuth(fireBaseApp);
