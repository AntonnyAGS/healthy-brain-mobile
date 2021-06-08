/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import firebase from 'firebase';

class Fire {
  static shared: any;

  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () =>
    firebase.initializeApp({
      apiKey: 'AIzaSyABt2K0lEuV3JE5Jav4E6xMeBlf3OWZtEo',
      authDomain: 'healthy-brain-app.firebaseapp.com',
      databaseURL: 'https://healthy-brain-app-default-rtdb.firebaseio.com',
      projectId: 'healthy-brain-app',
      storageBucket: 'healthy-brain-app.appspot.com"',
      messagingSenderId: '786433620049',
    });

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = (user: any) => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref('messages');
  }

  parse = (snapshot: firebase.database.DataSnapshot) => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  on = (callback: any) =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  // send the message to the Backend
  send = (messages: string | any[]) => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  append = (message: any) => this.ref.push(message);

  // close the connection to the Backend
  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire();
export default Fire;
