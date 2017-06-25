import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyA-_phOLDLWYjDE6vV1xTsJG_ULuvpJMCs',
  authDomain: 'o-pokedex-de-gifs.firebaseapp.com',
  databaseURL: 'https://o-pokedex-de-gifs.firebaseio.com',
  projectId: 'o-pokedex-de-gifs',
  storageBucket: '',
  messagingSenderId: '70217929855'
}

const connection = Firebase.initializeApp(config)
const DB = connection.database()

export default function install (Vue) {
  Object.defineProperties(Vue.prototype, {
    $db: {
      get () {
        return DB
      }
    }
  })
}
