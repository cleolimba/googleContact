const valDome = document.getElementById('btn');
const deleteMenu = document.getElementById('main-menu');



valDome.addEventListener('click', function(){
        const changeWidthContent = document.getElementById('main-content');
        if(changeWidthContent.classList.contains("main-content-fill")){
            changeWidthContent.classList.remove("main-content-fill");
            deleteMenu.classList.remove("hide-menu");
        }
        else{
            changeWidthContent.classList.add("main-content-fill");
            deleteMenu.classList.add("hide-menu");
        }
} 

)

// propriéte pour faire fonctionner le bouton ajouter contacts

const btnContacts = document.getElementById('btnContacts');
const contents = document.getElementById('contents');
const popup = document.getElementById('popup');
const tableau = document.getElementById("tableau");
btnContacts.addEventListener('click', function(evt){
    contents.style.display = "none";
    popup.style.display = "block";/*===============================================================*/
    tableau.style.display = "none";
})

// propriéte pour enregistre le tableau

function addContact() {
    // Récupérer les valeurs du formulaire
    const prenom = document.getElementById('prenom').value;
    // const name = document.getElementById('name').value;
    const entreprise = document.getElementById('entreprise').value;
    const enregistre = document.getElementById('entreprise').value;
    // const fonction = document.getElementById('fonction').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Créer une nouvelle ligne de tableau
    const tableBody = document.getElementById('contactTableBody');
    const newRow = tableBody.insertRow();

    // Insérer les nouvelles cellules
    const prenomcell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const phoneCell = newRow.insertCell(2);
    // const fonctioncell = newRow.insertCell(3);
    // const nameCell = newRow.insertCell(1);
    const entrepriseCell = newRow.insertCell(3);
    const enregistrecell = newRow.insertCell(4);
    const actionCell = newRow.insertCell(5);
    
    
    // Ajouter les valeurs aux cellules
    prenomcell.textContent = prenom;
    phoneCell.textContent = phone;
    emailCell.textContent = email;
    // fonctioncell.textContent = fonction;
    // nameCell.textContent = name;
    entrepriseCell.textContent = entreprise;
    enregistrecell.textContent = enregistre;
    actionCell.innerHTML = '<button onclick="editContact(this)">Modifier</button> <button onclick="deleteContact(this)">Supprimer</button>'; // Boutons pour modifier et supprimer

    updateContactCount();

    // Réinitialiser le formulaire
    document.getElementById('contactForm').reset();
}

function updateContactCount() {
    // Récupérer le nombre de lignes dans le tableau
    const contactCount = document.getElementById('contactTableBody').getElementsByTagName('tr').length;
    // Mettre à jour le nombre de contacts affiché
    document.getElementById('contactCount').textContent = contactCount;
}

function editContact(button) {
    const row = button.parentNode.parentNode;
    const prenom = row.cells[0].textContent;
    const email = row.cells[1].textContent;
    const phone = row.cells[2].textContent;
    const enregistre = row.cells[3].textContent;

    document.getElementById('prenom').value = prenom;
    document.getElementById('email').value = email;
    document.getElementById('phone').value = phone;

    // Supprimer la ligne du tableau
    row.remove();

    // Mettre à jour le nombre de contacts affiché
    updateContactCount();
}

function deleteContact(button) {
    // Récupérer la ligne du contact
    const row = button.parentNode.parentNode;
    // Supprimer la ligne du tableau
    row.remove();

    // Mettre à jour le nombre de contacts affiché
    updateContactCount();
}

// bouton enregistre

document.querySelector('.btnContact').addEventListener('click', function(){
    
    const main_content = document.getElementById('main-content');
    const contactsContent = document.getElementById('contents');
    const tableauContacts = document.getElementById('tableau');

    popup.style.display = "none";
    contents .style.display = "none";
    tableauContacts.style.display = "block";
    
    // if (tableauContacts.classList.contains("invisibles")) {
    //     contactsContent.classList.add("invisibles");
    //     tableauContacts.classList.remove("invisibles");
    //     popup.style.display = "none";
    //     console.log("ffffff")
        
    // // }else {
    //     contactsContent.classList.remove("invisibles");
    //     tableauContacts.classList.add("invisibles");
    // }
});

//la partie libellés

let bopen = document.querySelector('#open');
let btnreset = document.querySelector('#btnreset');
const btnLibelle = document.getElementById("btnLibelle");

function afficher() {
    document.querySelector('#btnLibelle').style.display="flex";
    // console.log(document.querySelector('#libelles'));
}
function masquer() {
    document.querySelector('#libelles');
    //  style.display = "none";
    btnLibelle.style.display = "none";
}
function closeLabel() {
    document.getElementById('libelleContent').style.display = 'none'; 

}
function saveLabel() {
    const labelInput = document.getElementById('labelInput').value;
    const copen = document.getElementById('copen');
    copen.insertAdjacentHTML('afterend', `<span>${copen}</span>`);
    closeLabel();
}
bopen.addEventListener("click",function () {
    afficher()
});
btnreset.addEventListener('click',masquer);
