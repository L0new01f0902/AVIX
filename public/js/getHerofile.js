import { fsdatabase } from "./config.js";
import {getDocs, collection} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const imgNames = collection(fsdatabase, "face");
function Capitalizer1(string){
    const str = string;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    string = str2;
    return string;
}
function Capitalizer2(string){
    const str = string.split("-");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    const str2 = str.join(" ");
    string = str2;
    return string;
}
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
            let name = heroNames.split(".");
            let HeroName = name[0];
            HeroName = Capitalizer1(HeroName)
            Name.innerHTML = HeroName;
            if (Name.innerHTML=="The-flash") {
                Name.innerHTML = Capitalizer2(Name.innerHTML);
            }
            else if (Name.innerHTML == "Wonder-woman"){
                Name.innerHTML = Capitalizer2(Name.innerHTML);
            }
            else if (Name.innerHTML=="Telannas"){
                Name.innerHTML = "Tel'Annas";
            }
            else if (Name.innerHTML=="Azzenka"){
                Name.innerHTML = "Azzen'Ka";
            }
            else if (Name.innerHTML=="Ybneth"){
                Name.innerHTML = "Y'bneth";
            }
            else if (Name.innerHTML=="Darcy"){
                Name.innerHTML = "D'Arcy";
            }
            else if (Name.innerHTML=="Diaochan"){
                Name.innerHTML = "Điêu Thuyền";
            }
            else if (Name.innerHTML=="Lubu"){
                Name.innerHTML = "Lữ Bố";
            }
            else if (Name.innerHTML=="Zanis"){
                Name.innerHTML = "Triệu Vân";
            }
            else if (Name.innerHTML=="Teemee"){
                Name.innerHTML = "TeeMee";
            };
            URL.setAttribute('href', './hero-template.html');
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
    });
});
