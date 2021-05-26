export let salleAttente ={
    nom: "la salle d'attente",
    salle : [],
};

export let pharmacie = {
    nom: "Pharmacie",
    clients : [],
    caisse : 0,
    get(prix){
        this.caisse += prix;
    }
};

export let cimetiere = {
    nom : "cimetiere",
    tombe: [],
};


// export let chat = {
//     nom: "Garfield",
//     miauler(){
//          setInterval(()=>{

//               console.log(`miaw`)
//           },2000)
//     },
// }

