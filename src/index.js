import React from 'react';
import { createRoot } from 'react-dom/client';

// buat elment dari tag h1
const heading = React.createElement('h1', null, 'Biodata Perusahaan');

// buat element dari tag li
const listItem1 = React.createElement('li', null, 'Nama: Dicoding Indonesia');
const listItem2 = React.createElement('li', null, 'Bidang: Education');
const listItem3 = React.createElement('li', null, 'Tagline: Decode Ideas, Discover Potential.');

// buat element dari tag ul yang menampung li
const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);

// buat element div yang menampung headng dan unorderedList
const container = React.createElement('div', null, [heading, unorderedList]);
console.log(container);

// buat variabel root yang nantinya semua element akan masuk ke situ semua
const root = createRoot(document.getElementById('root'));

// me-render/menampilkan isi elememt root. nah untuk isinya merupakan elment yang bisa dimasukkan ke parameter dalam render()
root.render(container);
