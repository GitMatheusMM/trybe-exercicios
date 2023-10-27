const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };

  console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama '${reader.favoriteBooks[0].title}'`);

  reader.favoriteBooks.push({
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    publisher: 'Rocco',
  });

  if (reader.favoriteBooks.length === 1) {
    console.log(`${reader.name} tem ${reader.favoriteBooks.length} livros favoritos.`);
  }else{
    console.log(`${reader.name} tem 1 livro favoritos.`);
  }