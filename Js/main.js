// Imports


import {Patient,Docteur,Diagnostique,Traitement} from "./classes.js";
import {salleAttente,pharmacie,cimetiere} from "./objets.js";


// Patients 


let patients = [];
patients.push(new Patient("Marcus","mal indenté",100,"vide","malade"));
patients.push(new Patient("Optimus","unsave",200,"vide","malade"));
patients.push(new Patient("Sangoku","404",80,"vide","malade"));
patients.push(new Patient("DarthVader","azmatique",110,"vide","malade"));
patients.push(new Patient("Semicolon","syntaxError",60,"vide","malade"));


// Traitements 

let ctrlmajF = new Traitement("ctrl+maj+f", 60);
let saveOnFocusChange = new Traitement("saveOnFocusChange",60);
let checklinkrelation = new Traitement("CheckLinkrelation", 35);
let ventoline = new Traitement("Ventoline", 40);
let f12doc = new Traitement("f12+doc", 20);


// Docteur

let chopper = new Docteur("Chopper",100,[]);


// Patient 1


 console.log(`Dans ${salleAttente.nom}, il y a ${patients.length} personnes`);

 patients[0].seDeplacer(salleAttente.salle, chopper.cabinet);
//  console.log(salleAttente.salle,chopper.cabinet);
 console.log(`${patients[0].nom} est rentré au cabinet`);



 console.log(`La maladie de ${patients[0].nom} est ${patients[0].maladie}`);

 let patient = new Diagnostique(patients[0].maladie, "");
 console.log(`Le traitement de ${patients[0].nom} est ${patient.traitement}`);

 patients[0].payer(50);
 console.log(`${patients[0].nom} a payé ${chopper.consultation} euros `);
 console.log(`${patients[0].nom} a ${patients[0].argent} euros actuellement `)

chopper.recevoirArgent();
console.log(chopper.argent);

patients[0].seDeplacer(chopper.cabinet,pharmacie.clients);


console.log(`${patients[0].nom} a quitté le cabinet `);
console.log(`${patients[0].nom} est allé à la ${pharmacie.nom} `);

console.log(`le traitement de ${patients[0].nom} coûte ${chopper.consulation} euros`);

patients[0].payer(ctrlmajF.prix);
patients[0].seDeplacer(pharmacie.clients, cimetiere.tombe);
console.log(cimetiere);

console.log(`${patients[0].nom} n'as pas payé son traitement, il est mort et enterrer au ${cimetiere.nom}`);

// Patient 2


console.log(`Dans ${salleAttente.nom}, il y 4 personnes`);

patients[1].seDeplacer(salleAttente.salle, chopper.cabinet);
console.log(salleAttente.salle,chopper.cabinet);
console.log(`${patients[1].nom} est entré au cabinet `);




console.log(`La maladie ${patients[1].nom} est ${patients[1].maladie}`);

let patient2 = new Diagnostique(patients[1].maladie, "");
console.log( `Le traitement de ${patients[1].nom} est ${patient2.traitement} `);

patients[1].payer(100);

console.log(`${patients[1].nom} a bien payé ${chopper.consulation} euros au docteur ${chopper.nom}`);
console.log(`${patients[1].nom} a ${patients[1].argent} euros actuellement`);

chopper.recevoirArgent();
console.log(chopper.argent);

patients[1].seDeplacer(chopper.cabinet,pharmacie.clients);
console.log(chopper.cabinet,pharmacie.clients);
console.log(`${patients[1].nom} a quitté le cabinet `);
console.log(`${patients[1].nom} est allé à la ${pharmacie.nom} `);

console.log(`le traitement de ${patients[1].nom} coût ${chopper.consulation} euros`);

patients[1].payer(saveOnFocusChange.prix);

console.log(`${patients[1].nom} est soigné`);


// Patient 3 

console.log(`Dans ${salleAttente.nom}, il y 3 personnes`);

patients[2].seDeplacer(salleAttente.salle, chopper.cabinet);
console.log(salleAttente.salle,chopper.cabinet);
console.log(`${patients[2].nom} est entré au cabinet `);




// miaw place 

console.log(`La maladie ${patients[2].nom} est ${patients[2].maladie}`);

let patien3 = new Diagnostique(patients[2].maladie, "");
console.log( `Le traitement de ${patients[2].nom} est ${patien3.traitement} `);

patients[2].payer(50);
// console.log(patients[2]);
console.log(`${patients[2].nom} a bien payé ${chopper.consulation} euros au docteur ${chopper.nom}`);
console.log(`${patients[2].nom} a ${patients[2].argent} euros actuellement`);

chopper.recevoirArgent();
console.log(chopper.argent);

patients[2].seDeplacer(chopper.cabinet,pharmacie.clients);
console.log(chopper.cabinet,pharmacie.clients);
console.log(`${patients[2].nom} a quitté le cabinet `);
console.log(`${patients[2].nom} est allé à la ${pharmacie.nom} `);

console.log(`le traitement de ${patients[2].nom} coût ${chopper.consulation} euros`);

patients[2].payer(checklinkrelation.prix);
patients[2].seDeplacer(pharmacie.clients, cimetiere.tombe);
console.log(cimetiere);

console.log(`${patients[2].nom} n'as pas payé son traitement, il est mort et enterrer au ${cimetiere.nom}`);


// Patient 4 


console.log(`Dans ${salleAttente.nom}, il y 2 personnes`);

patients[3].seDeplacer(salleAttente.salle, chopper.cabinet);
console.log(salleAttente.salle,chopper.cabinet);
console.log(`${patients[3].nom} est entré au cabinet `);




console.log(`La maladie ${patients[3].nom} est ${patients[3].maladie}`);

let patient4 = new Diagnostique(patients[3].maladie, "");
console.log( `Le traitement de ${patients[3].nom} est ${patient4.traitement} `);

patients[3].payer(50);
// console.log(patients[3]);
console.log(`${patients[3].nom} a bien payé ${chopper.consulation} euros au docteur ${chopper.nom}`);
console.log(`${patients[3].nom} a ${patients[3].argent} euros actuellement`);

chopper.recevoirArgent();
console.log(chopper.argent);

patients[3].seDeplacer(chopper.cabinet,pharmacie.clients);
console.log(chopper.cabinet,pharmacie.clients);
console.log(`${patients[3].nom} a quitté le cabinet `);
console.log(`${patients[3].nom} est allé à la ${pharmacie.nom} `);

console.log(`le traitement de ${patients[3].nom} coût ${chopper.consulation} euros`);

patients[3].payer(ventoline.prix);
console.log(`${patients[3].nom} est soigné`);


// Patient 5

console.log(`Dans ${salleAttente.nom}, il y 1 personnes`);

patients[4].seDeplacer(salleAttente.salle, chopper.cabinet);
console.log(salleAttente.laSalle,chopper.cabinet);
console.log(`${patients[4].nom} est entré au cabinet `);


console.log(`La maladie ${patients[4].nom} est ${patients[4].maladie}`);

let patient5 = new Diagnostique(patients[4].maladie, "");
console.log( `Le traitement de ${patients[4].nom} est ${patient5.traitement} `);

patients[4].payer(50);
// console.log(patients[4]);
console.log(`${patients[4].nom} a bien payé ${chopper.consulation} euros au docteur ${chopper.nom}`);
console.log(`${patients[4].nom} a ${patients[4].argent} euros actuellement`);

chopper.recevoirArgent();
console.log(chopper.argent);

patients[4].seDeplacer(chopper.cabinet,pharmacie.clients);
console.log(chopper.cabinet,pharmacie.clients);
console.log(`${patients[4].nom} a quitté le cabinet `);
console.log(`${patients[4].nom} est allé à la ${pharmacie.nom} `);

console.log(`le traitement de ${patients[4].nom} coût ${chopper.consulation} euros`);

patients[4].payer(f12doc.prix);
patients[4].seDeplacer(pharmacie.clients, cimetiere.tombe);
console.log(cimetiere);

console.log(`${patients[4].nom} n'as pas payé son traitement, il est mort et enterrer au ${cimetiere.nom}`);

