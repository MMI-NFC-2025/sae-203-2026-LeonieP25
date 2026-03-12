import { getAllArtistesByDate, getAllScenesByName, getAllArtistesByName, getArtisteById, getSceneById, getArtistesBySceneId } from './backend.mjs';

// Test : récupérer tous les artistes triés par date de représentation
/* 
try {
  const artistes = await getAllArtistesByDate();
  console.log('Artistes par date :');
  console.table(artistes);
} catch (e) {
  console.error(e);
}
*/

// Test : récupérer toutes les scènes triées par nom
/*
try {
  const scenes = await getAllScenesByName();
  console.log('Scènes par nom :');
  console.table(scenes);
} catch (e) {
  console.error(e);
}
*/

// Test : récupérer tous les artistes triés par nom
/*
try {
  const artistes = await getAllArtistesByName();
  console.log('Artistes par nom :');
  console.table(artistes);
} catch (e) {
  console.error(e);
}
*/

// Test : récupérer un artiste précis grâce à son ID
/*
try {
  const artiste = await getArtisteById('tybs6etayxc5140');
  console.log('Artiste par ID :');
  console.table(artiste);
} catch (e) {
  console.error(e);
}
*/

// Test : récupérer une scène précise grâce à son ID
/*
try {
  const scene = await getSceneById('tybs6etayxc5140');
  console.log('Scène par ID :');
  console.table(scene);
} catch (e) {
  console.error(e);
}
*/

// Test : récupérer les artistes qui jouent sur une scène spécifique
/*
try {
  const artistes = await getArtistesBySceneId('8zxnlwvntqjk1gi');
  console.log('Artistes de la scène :');
  console.table(artistes);
} catch (e) {
  console.error(e);
}
*/