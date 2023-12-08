import { fsdatabase } from "./config.js";
import {getDocs, collection} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const imgNames = collection(fsdatabase, "talents");
window.addEventListener("load", function(){
    getDocs(imgNames).then((results) => {
        console.log(results)
        const fileNames = results._snapshot.docChanges;
        console.log(fileNames);
        for (let i = 0; i < fileNames.length; i++) {
            let heroFileName = fileNames[i].doc.data.value.mapValue.fields.URL.stringValue;
            console.log(heroFileName);
            let img = document.createElement('img');
            let heroTemplate = document.createElement('div');
            let URL = document.createElement('a');
            let Name = document.createElement('h2');
            let heroNames = fileNames[i].doc.data.value.mapValue.fields.name.stringValue;
            console.log(heroNames);
            let name = heroNames.split(".");
            let heroName = name[0];
            Name.innerHTML = heroName;
            console.log(heroName);
            URL.setAttribute('href', './talent.html');
            img.setAttribute('src', heroFileName);
            img.setAttribute('class', i);
            heroTemplate.setAttribute('class', i)
            let imgArray = document.getElementById('img-file');
            imgArray.appendChild(URL);
            URL.appendChild(heroTemplate);
            heroTemplate.appendChild(img);
            heroTemplate.appendChild(Name);
        }
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Read data from firestore unsuccessful, code ${errorCode}, message ${errorMessage}`)
    });;
})