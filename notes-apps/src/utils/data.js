let notes = [
  {
    id: 'notes-1',
    title: "React Js",
    body: "React adalah JavaScript library yang digunakan untuk membangun User Interface (antarmuka pengguna). Hal ini ditegaskan oleh tim pengembang React pada website resminya di reactjs.org. React diciptakan oleh Meta (dahulu Facebook) dan mulai dipublikasi pada NPM repository sejak tahun 2012. Berikut konsep yang dimanfaatkan oleh React.",
    createdAt: '2022-01-16T04:27:34.572Z'
  },
  {
    id: 'notes-2',
    title: "React Element",
    body: "Element merupakan blok terkecil dalam membangun antarmuka di aplikasi React. Seluruh UI yang tampak, merupakan sebuah element. Element dapat berupa paragraph, button, image, dan tipe lainnya.",
    createdAt: '2022-05-03T04:27:34.572Z'
  },
  {
    id: 'notes-3',
    title: "Composition",
    body: "Composition atau komposisi merupakan proses menggabungkan banyak fungsi untuk menciptakan data yang lebih kompleks. Di React, komposisi sering dipraktikkan ketika membuat sebuah komponen. Alih-alih mengembalikan data, React component mengembalikan UI.",
    createdAt: '2022-04-16T04:27:34.572Z'
  },
  {
    id: 'notes-4',
    title: "React Js",
    body: "React adalah JavaScript library yang digunakan untuk membangun User Interface (antarmuka pengguna). Hal ini ditegaskan oleh tim pengembang React pada website resminya di reactjs.org. React diciptakan oleh Meta (dahulu Facebook) dan mulai dipublikasi pada NPM repository sejak tahun 2012. Berikut konsep yang dimanfaatkan oleh React.",
    createdAt: '2022-04-14T04:27:34.572Z'
  },
  {
    id: 'notes-5',
    title: "React Element",
    body: "Element merupakan blok terkecil dalam membangun antarmuka di aplikasi React. Seluruh UI yang tampak, merupakan sebuah element. Element dapat berupa paragraph, button, image, dan tipe lainnya.",
    createdAt: '2022-04-14T04:27:34.572Z'
  },
  {
    id: 'notes-6',
    title: "Composition",
    body: "Composition atau komposisi merupakan proses menggabungkan banyak fungsi untuk menciptakan data yang lebih kompleks. Di React, komposisi sering dipraktikkan ketika membuat sebuah komponen. Alih-alih mengembalikan data, React component mengembalikan UI.",
    createdAt: '2022-04-14T04:27:34.572Z'
  },
]

function getAllNotes() {
  return notes;
}

function getNote(id) {
  const foundedNote = notes.find((note) => note.id === id);
  return foundedNote;
}

function addNotes({ title, body }) {
  notes = [...notes,
  {
    id: `notes-${new Date()}`, title: title || '(untitled)', body, createdAt: new Date().toISOString()
  }];
}

function deleteNotes(id) {
  notes = notes.filter((note) => note.id !== id);
}

export { getAllNotes, getNote, addNotes, deleteNotes };
