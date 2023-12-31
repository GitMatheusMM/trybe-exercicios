
//Exercise 1

const songs = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const music31031685 = songs.find((song) => song.id === '31031685');

// console.log(music31031685);


// Exercise 2

const contacts = [
  { name: 'João', phone: '123456789' },
  { name: 'Maria', phone: '987654321' },
  { name: 'Pedro', phone: '456123789' },
  { name: 'Ana', phone: '789456123' },
  { name: 'Carlos', phone: '321654987' },
  { name: 'Mariana', phone: '654123987' },
  { name: 'Lucas', phone: '987321654' },
  { name: 'Laura', phone: '123789456' },
  { name: 'Tiago', phone: '789123456' },
  { name: 'Beatriz', phone: '456789123' }
];

const searchContact = (contacts, name) => {
  const specificContact = contacts.find((contact) => contact.name === name);
  if (specificContact === undefined) {
    return 'Contato não encontrado';
  } else {
    return {...specificContact}
  }
};

console.log(searchContact(contacts, 'Mariana'));//{ name: 'Mariana', phone: '654123987' }
console.log(searchContact(contacts, 'Matheus'));// Contato não encontrado