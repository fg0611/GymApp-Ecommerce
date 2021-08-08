import firebase from "firebase/app"; //importamos firebase (hacemos npm install firebase )
import "firebase/auth"; //esto nos va a servir para hacer la autenticacion
import "firebase/firestore"; //firestore es lo que nos ofrece una base de datos en la nube
import "firebase/storage";

//esta informacion la sacamos de la web cuando creamos proyecto, lo encontramos en
//configuracion del proyecto y se llama CONFIGURACION DEL SDK
var firebaseConfig = {
  apiKey: "AIzaSyAOLhRNkKn76hFHGAJamRvduBzrb-OE8yo",
  authDomain: "sportgym-ea9c4.firebaseapp.com",
  projectId: "sportgym-ea9c4",
  storageBucket: "sportgym-ea9c4.appspot.com",
  messagingSenderId: "160238185093",
  appId: "1:160238185093:web:33e70feb53164bd48e17ec",
  measurementId: "G-28YWTW7WQX"
};
// inicializamos Firebase
firebase.initializeApp(firebaseConfig);
//ejecutamos la funcion auth es una variable para despues poder utilizar luego
let auth = firebase.auth();
let storage = firebase.storage();

//exportamos auth para poder utilizarlo en otros archivos y componentes

export { auth, storage };
export default firebase;

//loggearse con email y password
export function loginUser() {
  auth.signInWithEmailAndPassword();
}

//iniciar sesion con google
export function loginWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider(); //el provider seria la red social
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((snap) => snap.user);
}

//cerrar sesion con google
