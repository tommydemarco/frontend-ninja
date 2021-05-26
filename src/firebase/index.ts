import firebase from 'firebase/app';
import "firebase/auth";

import { firebaseConfig } from "./config"

export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();