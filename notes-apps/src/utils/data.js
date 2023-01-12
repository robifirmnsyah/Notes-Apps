const getData = () => {
  return [
    {
      id: 1,
      title: "React Js",
      body: "React adalah JavaScript library yang digunakan untuk membangun User Interface (antarmuka pengguna). Hal ini ditegaskan oleh tim pengembang React pada website resminya di reactjs.org. React diciptakan oleh Meta (dahulu Facebook) dan mulai dipublikasi pada NPM repository sejak tahun 2012. Berikut konsep yang dimanfaatkan oleh React.",
      archived: false,
      createdAt: '2022-04-14T04:27:34.572Z'
    },
    {
      id: 2,
      title: "React Element",
      body: "Element merupakan blok terkecil dalam membangun antarmuka di aplikasi React. Seluruh UI yang tampak, merupakan sebuah element. Element dapat berupa paragraph, button, image, dan tipe lainnya.",
      archived: false,
      createdAt: '2022-04-14T04:27:34.572Z'
    },
    {
      id: 3,
      title: "Composition",
      body: "Composition atau komposisi merupakan proses menggabungkan banyak fungsi untuk menciptakan data yang lebih kompleks. Di React, komposisi sering dipraktikkan ketika membuat sebuah komponen. Alih-alih mengembalikan data, React component mengembalikan UI.",
      archived: false,
      createdAt: '2022-04-14T04:27:34.572Z'
    },
  ];
}

export { getData };