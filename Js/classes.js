// ## Description des patients
// >les malades ont un nom, une maladie, de l'argent, une poche, un état de santé,
// ils savent aller à un endroit, prendre un médicamment et payer.
//  Au début, les patients sont dans un salle d'attente. 


export class Patient {
    constructor(nom,maladie,argent,poche,etatSante){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.seDeplacer = (depart,arrivee)=>{
        arrivee.push(arrivee);
        depart.splice(depart.indexOf(this),1)
        this.payer = (prix)=>{
        this.argent -= prix;
        if(this.argent < 0){
           
            console.log(`${this.nom} ne sait pas payer son traitement`);
        }else{
            console.log(`${this.nom} a payé son traitement`);
        }

    }
    }
    
    }
    

}



// export let patients = [];
// patients.push(new Patient("Marcus","mal indenté",100,"vide","malade"));
// patients.push(new Patient("Optimus","unsave",200,"vide","malade"));
// patients.push(new Patient("Sangoku","404",80,"vide","malade"));
// patients.push(new Patient("DarthVader","azmatique",110,"vide","malade"));
// patients.push(new Patient("Semicolon","syntaxError",60,"vide","malade"));



// ## Description du doctor
// >Le doctor lui reçoit les patients dans son cabinet. 
// Tout d'abord il les diagnostiques puis se fait payer avant de préscrire un traitement. 
// Attention le doctor fait à chaque fois sortir le patient de son cabinet avant de prendre le suivant.
//  Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. 
//  Son chat miaule toutes les deux secondes dans la console(bonus).
//   La consultation coûte 50€. Les patients son dans un état de traitement avant de sortir du cabinet.
// ​
// |nom|argent|cabinet|diagnostique|patienTIn|patientOut
// |---|---|---|---|---|---|
// |Debugger|0|[chat]



export class Docteur{
    constructor(nom,argent){
        this.nom = nom;
        this.argent = argent;
        this.cabinet = [];
        this.consultation = 50;

    }
    recevoirArgent(){
        this.argent += this.consultation;
    }
 
}









// ### Grille des diagnostiques
// |maladie|traitement|
// |---|---|
// |mal indenté|`ctrl+maj+f`|
// |unsave|`saveOnFocusChange`|
// |404|`CheckLinkRelation`|
// |azmatique|`Ventoline`|
// |syntaxError|`f12+doc`|
// ​




export class Diagnostique {
    constructor(maladie,traitement){
        this.maladie = maladie;
        this.traitement = traitement;
        if(this.maladie == "mal indenté"){
            this.traitement = "ctrl+maj+f"
        }else if(this.maladie == "unsave"){
            this.traitement = "saveOnFocusChange"
        }else if(this.maladie == 404){
            this.traitement = "CheckLinkRelation"
        }else if(this.maladie == "azmatique"){
            this.traitement = "Ventoline"
        }else {
            this.traitement = "f12+doc"
        }
    }

}


export class Traitement {
    constructor(traitement,prix){
        this.traitement = traitement;
        this.prix = prix;
    }
}


// ## La pharmacie
// >Les patients iront par après à la pharmacie et recevront leur traitement
//  s'ils ont assez d'argent. Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé
//   sinon ils seront mort et il faudra alors les pousser dans un cimetière.






