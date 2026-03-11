import { getAllArtistesByDate, getAllScenesByName, getAllArtistesByName, getArtisteById, getSceneById, getArtistesBySceneId } from './backend.mjs';

// Test : récupérer tous les artistes par date
/*
try {
    const artistes = await getAllArtistesByDate();
    console.log('Artistes par date :');
    console.table(artistes);
} catch (e) {
    console.error(e);
}
*/

// Test : récupérer toutes les scènes par nom
/*
try {
    const scenes = await getAllScenesByName();
    console.log('Scènes par nom :');
    console.table(scenes);
} catch (e) {
    console.error(e);
}
*/

// Test : récupérer tous les artistes par nom
/*
try {
    const artistes = await getAllArtistesByName();
    console.log('Artistes par nom :');
    console.table(artistes);
} catch (e) {
    console.error(e);
}
*/

// Test : récupérer un artiste par ID
/*
try {
    const artiste = await getArtisteById('tybs6etayxc5140');
    console.log('Artiste par ID :');
    console.table(artiste);
} catch (e) {
    console.error(e);
}
*/

// Test : récupérer une scène par ID
/*
try {
    const scene = await getSceneById('tybs6etayxc5140');
    console.log('Scène par ID :');
    console.table(scene);
} catch (e) {
    console.error(e);
}
*/

// Test : récupérer les artistes d'une scène spécifique
/*
try {
    const artistes = await getArtistesBySceneId('8zxnlwvntqjk1gi');
    console.log('Artistes de la scène :');
    console.table(artistes);
} catch (e) {
    console.error(e);
}
*/
