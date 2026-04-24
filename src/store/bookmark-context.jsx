import {createContext} from 'react';

console.log("Provjera koliko se puta ovaj kod izvrsava");
const BookmarkContext = createContext({nekiProperty: "Bezveze"});

export default BookmarkContext;