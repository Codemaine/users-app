import { createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {getFirebase, reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {getFirestore, reduxFirestore, firestoreReducer} from 'redux-firestore';
// import firebaseReducer from 'react-redux-firebase';
import firebase from '../firebase/firebase';
import contactsReducer from '../reducers/contactsReducer';
import authReducer from '../reducers/authReducer';

const reducers = combineReducers({
    contactsState: contactsReducer,
    auth: authReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})
export const store = createStore(
    reducers, 
    compose(
         applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(firebase),
        reduxFirestore(firebase),
    )
);
