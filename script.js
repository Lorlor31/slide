// le début c'est des essais avec JSON et tableaux 
//et classes parce que je ne vois pas l'utilité pour l'instant

// idée d'a melioration ; faire un eventlistener regroupant les 2boutons avance et recule et faire un  if sellon le bouton appuyé
//pour regrouper les instructions à exécuter / faire une fonction communr aux dernières lignes

const photosTABL= [
    {   "nom" : "Lilas en robe" ,
        "fichier" : "1.jpg",
        "seul" : true } 
        ,
    {   "nom" : "Lilas et nous" ,
        "fichier" : "2.jpg",
        "seul" : false } 
        ,
    {    "nom" : "Lilas en Sangoku" ,
        "fichier" : "3.jpg",
        "seul" : true } 
        ,
    {    "nom" : "Lilas et le renard" ,
        "fichier" : "4.jpg",
        "seul" : true } 
        ,
    {    "nom" : "Lilas et Mamie Choupie" ,
        "fichier" : "5.jpg",
        "seul" : false } 
        ,
    {    "nom" : "Lilas sourit" ,
        "fichier" : "6.jpg",
        "seul" : true } 
        ,
    {    "nom" : "Lilas pensive" ,
        "fichier" : "7.jpg",
        "seul" : true } 
        ,
]

for (let x of photosTABL) {
    if (x.seul==false) {console.log (x.nom)}
    else {}
}




/*
// ?? on ne peut parcourir un JSON en uttilsant les rangs chiffrés  comme un tableau?
// quel est l'interet du JSON par rapport à une classe excepté  le fait que ça soit un standard de communication
// essayer de mettre les photos ds un JSON et parcourir les propriétés--> j'arrive pas avec des chifres
const photosJSON = {

    "photo1": {
    "fichier" : "1.jpg",
    "seul" : true } 
    ,
    "photo2": {    
    "nom" : "2.jpg",
    "seul" : false 
}

}
//*convertir le JSON en objet sinon on peut pas accéder aux propriétés facilement  ??
let photoTEXT=`{
    
    "photo1": {
    "fichier" : "1.jpg",
    "seul" : true } 
    ,
    "photo2": {    
    "nom" : "2.jpg",
    "seul" : false 
    }
}`
let photosOBJ=JSON.parse(photoTEXT)


console.log (photosOBJ[0].fichier)

////////////////

*/

let c=0
const photos=["1.jpg","2.jpg","3.jpg","4.jpg"] 
let photoEnCours=photosTABL[c]
const avance=document.getElementById("avance")
const recule=document.getElementById("recule")
const photo=document.getElementById("photo")

let avancerEvent=avance.addEventListener("click", avancer)
let reculerEvent=recule.addEventListener("click", reculer)

function avancer() { 
    max=(photosTABL.length) -1
    console.log(max)
    if (photoEnCours===photosTABL[max] ) {
        photo.remove()
        titreh2.textContent="Et voilà c'est fini !"
        let paragraphe=document.createElement("p")
        let texteDeFin=document.createTextNode("C'est la fin du diapo")
        paragraphe.appendChild(texteDeFin)
        document.getElementById("cadrePhoto").appendChild(paragraphe) }
    else
    {c=c+1 ;
    attribuerPhotoEtTitreAAfficher() ;
    }
}


function reculer (){ 
    if (photoEnCours===photosTABL[0] ) {photoEnCours=photoEnCours}
    else
    {c=c-1 ;
    attribuerPhotoEtTitreAAfficher() ;
    }
}

function attribuerPhotoEtTitreAAfficher () {
    photoEnCours=photosTABL[c]
    let photo_fichier="photos/" +photoEnCours.fichier
    photo.setAttribute("src",photo_fichier )
    let cadreTitre=document.getElementById("cadreTitre")
    cadreTitre.textContent=""
    let titreh2=document.createElement("h2")
    let titrePhoto=document.createTextNode(photoEnCours.nom)
    titreh2.appendChild(titrePhoto)
    document.getElementById("cadreTitre").appendChild(titreh2) 
}
