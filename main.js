let cardswrapper=document.querySelector('#cardswrapper');
let mostracontatti=document.querySelector('#mostracontatti');
let aggiungi=document.querySelector('#aggiungi');
let inputnomecontatto=document.querySelector('#inputnomecontatto');
let inputnumerocontatto=document.querySelector('#inputnumerocontatto');
let rimuovi=document.querySelector('#rimuovi');
let butt_remove=document.querySelector('#butt-remove')


let rubrica={
    contacts:[
        {name:'x',number:11111111},
        {name:'y',number:22222222},
        {name:'z',number:33333333},
        {name:'xy',number:44444444}
    ],
showcontacts:function(){
        cardswrapper.innerHTML='';
    this.contacts.forEach((contact)=>{
        let div=document.createElement('div');
        div.classList.add('col-12', 'col-md-8');
        div.innerHTML=`
        <div class="card-custom d-flex justify-content-evenly ">
        <p class="lead">${contact.name}</p>
        <p class="lead">${contact.number}</p>
        </div>
        `
        cardswrapper.appendChild(div);
    });
},
addcontact:function(newname,newnumber){
    this.contacts.push({name:newname, number:newnumber});
    this.showcontacts();
},
removecontact:function(oldname){
    let names=this.contacts.map((contact)=>contact.name.toLowerCase());
    let index=names.indexOf(oldname.toLowerCase());
    if(index>-1){
        this.contacts.splice(index,1);
        this.showcontacts();
        } else{
            alert('contatto non presente');
        };
        this.showcontacts();
}
// In questa funzione ho creato un clone con map(()=>)e ho dato la possibilità di cancellare il nome con o senza maiuscola, toLowerCase(), con l' indexOf verifichiamo se il contatto è presente in rubrica, se è presente lo cancelliamo
}
// Evento mostra rubrica
let confirm=true;
cardswrapper.innerHTML=''
mostracontatti.addEventListener('click',()=>{
    if(confirm){
        rubrica.showcontacts();
        confirm=false;
        mostracontatti.innerHTML='Nascondi';  
    }else{
        cardswrapper.innerHTML=''
        confirm=true;
        mostracontatti.innerHTML='Mostra rubrica'; 
    }
});
// Per mostrare i contatti mi creo una variabile d' appoggio confirm e la rendo vera, svuoto il contenuto della row(cardswrapper),
// faccio partire l' evento al click e se la variabile è vera mostro la lista di contatti, rendo la variabile falsa e cambio la dicitura del bottone in nascondi.
// A questo punto dato che la variabile è falsa al cliccare del bottone su Nascondi la row(cardswrapper) si svuoterà, la variabile d' appoggio tornerà vera, la dicitura del bottone tornerà mostra rubrica, 

// Evento aggiungi contatti
aggiungi.addEventListener('click',()=>{
    if(inputnomecontatto.value!='' && inputnumerocontatto.value!=''){ rubrica.addcontact(inputnomecontatto.value, inputnumerocontatto.value);
        mostracontatti.innerHTML='Nascondi'; 
        inputnomecontatto.value='';
        inputnumerocontatto.value='';
    }
});

// Evento rimuovi contatti
rimuovi.addEventListener('click',()=>{
    rubrica.removecontact(inputnomecontatto.value);
    mostracontatti.innerHTML='Nascondi'; 
    inputnomecontatto.value='';
});
butt_remove.addEventListener('click',()=>{
    rubrica.removecontact(inputnomecontatto.value);
    mostracontatti.innerHTML='Nascondi'; 
    inputnomecontatto.value='';
});
