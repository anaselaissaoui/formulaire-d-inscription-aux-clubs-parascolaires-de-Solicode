const form = document.querySelector("form");
let tableSection=document.querySelector("#section2");
let ajout=document.getElementById("ajouter");
tableSection.style.display="none";
ajout.addEventListener("click", submit);
function submit(e){
    e.preventDefault();
    tableSection.style.display="flex";
    var nomInput = document.getElementById('nomInp');
    var marqueInput = document.getElementById('marqueInp');
    var prixInput = document.getElementById('prixInp');
    var dateInput =document.getElementById('dateInp');
    var typeInput = document.getElementById('typeInp');
    const checkRadio = document.querySelector('input[name="promotion"]:checked');
    var nomValid="";
    var marqueValid="";
    var prixValid="";
    var dateValid="";
    var typeValid="";
    var promotionValid="";

/* ---------------------------------nom section---------------------------------*/ 
    if(nomInput.value.length <=30 && nomInput.value.length>0){
        document.getElementById("nomMsg").innerHTML="";
        nomInput.style.border="2px solid green";
        nomValid=1;
    }else{
        nomInput.style.border="2px solid red";
        document.getElementById("nomMsg").innerHTML="&#9746;&nbsp Entrer un nom entre 1 et 30 vartres";
        nomValid=0;
    }

    /* ---------------------------------marque section---------------------------------*/ 

    if(marqueInput.value.length <=30 && marqueInput.value.length>0){
        document.getElementById("marqueMsg").innerHTML="";
        marqueInput.style.border="2px solid green";
        marqueValid=1;
    }else{
        marqueInput.style.border="2px solid red";
        document.getElementById("marqueMsg").innerHTML="&#9746;&nbsp Entrer un nom entre 1 et 30 vartres";
        marqueValid=0;
    }

/* ---------------------------------prix section---------------------------------*/ 
    let regex = /[0-9].*[0-9]$/;
        if(regex.test(prixInput.value)==false){
            document.getElementById("prixMsg").innerHTML="&#9746;&nbsp Entrer prix valide";
            prixValid=0;
        }else{
            document.getElementById("prixMsg").innerHTML="";
            prixInput.style.border="2px solid green";
            prixValid=1;    
        }

/* ---------------------------------date section---------------------------------*/ 
        if(dateInput.value==""){
            document.getElementById("dateMsg").innerHTML="&#9746;&nbsp vous devez choiser la date";
            dateValid=0;
        }else{
            document.getElementById("dateMsg").innerHTML="";
            dateValid=1;
        }
/* ---------------------------------type section---------------------------------*/ 
    if(productsListForm.type.selectedIndex==0){
        document.getElementById("selectMsg").innerHTML="&#9746;&nbsp vous devez selectionner 1 option";
        typeValid=0;
    }else{
        document.getElementById("selectMsg").innerHTML="";
        typeInput.style.border="2px solid green";
        typeValid=1;
    }

    /* ---------------------------------promotion section---------------------------------*/ 
    if(checkRadio !=null) {
        document.getElementById("promotionMsg").innerHTML="";
        promotionValid=1;
    }else{
        document.getElementById("promotionMsg").innerHTML="vous devez choiser 1 option";
        promotionValid=0;
    }

    /* ---------------------------------validation section---------------------------------*/ 
    var  table = document.getElementById("table");
    if(nomValid==1 && marqueValid==1 && prixValid==1 && dateValid==1 &&typeValid==1 && promotionValid==1 ){
        document.getElementById("error").innerHTML="";
        let line = document.createElement('tr');
        let collNom = document.createElement('td');
        let collMarque = document.createElement('td');
        let collPrix = document.createElement('td');
        let collDate = document.createElement('td');
        let collType = document.createElement('td');
        let collPromotion = document.createElement('td');
        let collModifier = document.createElement('td');
        let collSupprimer = document.createElement('td');
        let btnmodifier = document.createElement('button');
        let btnsupprimer = document.createElement('button');
        btnsupprimer.innerHTML = "Supprimer";
        btnmodifier.innerHTML = "Modifier";
        var  table = document.getElementById("tb");
        table.appendChild(line);
            
            line.appendChild(collNom);
            line.appendChild(collMarque);
            line.appendChild(collPrix);
            line.appendChild(collDate);
            line.appendChild(collType);
            line.appendChild(collPromotion);
            line.appendChild(collModifier);
            line.appendChild(collSupprimer);


            collModifier.appendChild(btnmodifier);
            collSupprimer.appendChild(btnsupprimer);

              collNom.innerHTML = nomInput.value;
              collMarque.innerHTML =marqueInput.value;
              collPrix.innerHTML = prixInput.value;
              collDate.innerHTML = dateInput.value;
              collType.innerHTML = typeInput.value;
              collPromotion.innerHTML = checkRadio.value;

/* ---------------------------------supprimer function---------------------------------*/ 
              btnsupprimer.onclick = supprimer;
              function supprimer() {
                let supprimerValid = "Êtes-vous sûr de vouloir supprimer ce produit!\nEither OK or Cancel.";
                if (confirm(supprimerValid) == true) {
                    text = "You pressed OK!";
                    table.removeChild(line);
                  }
                  
          }
/* ---------------------------------Modifier function---------------------------------*/ 
   
          btnmodifier.onclick = modifier;
          function modifier(){
            
           
              nomInput.value = table.rows[line.rowIndex].cells[0].innerText;
              marqueInput.value = table.rows[line.rowIndex].cells[1].innerText;
              prixInput.value = table.rows[line.rowIndex].cells[2].innerText;
              dateInput.value = table.rows[line.rowIndex].cells[3].innerText;
              typeInput.value =table.rows[line.rowIndex].cells[4].innerText;
              
               if (collPromotion.innerHTML=="Oui") {
                   document.getElementById("ouiOption").checked=true;
              }else  {
              document.getElementById("nonOption").checked=true;
              }
              document.getElementById("ajouter").style.display="none";
            document.getElementById("modifier").style.display="block";
        

              document.getElementById("modifier").onclick = ModifierdeAjouterRow;
            function ModifierdeAjouterRow() {
                document.getElementById("ajouter").style.display="block";
            document.getElementById("modifier").style.display="none";
                    table.rows[line.rowIndex].cells[0].innerText = nomInput.value;
                    table.rows[line.rowIndex].cells[1].innerText= marqueInput.value;
                    table.rows[line.rowIndex].cells[2].innerText = prixInput.value;
                    table.rows[line.rowIndex].cells[3].innerText = dateInput.value;
                    table.rows[line.rowIndex].cells[4].innerText = typeInput.value;
                    if (document.getElementById("ouiOption").checked == true) {
                        table.rows[line.rowIndex].cells[5].innerText = 
                        document.getElementById("ouiOption").value;
                    }else
                     {
                      table.rows[line.rowIndex].cells[5].innerText =
                         document.getElementById("nonOption").value;
                    }
            }
        }
    }else{
        document.getElementById("error").innerHTML="You have invalid input(s)";
        
    }

    
    
}

