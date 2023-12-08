import { storage, fsdatabase } from "./config.js";
import {getDownloadURL, ref as storageRef, uploadBytes} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import {doc, setDoc} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
var heroinput = document.getElementById("heroface");
var enchantments = document.getElementById("enchantments");
var armory = document.getElementById("armory");
var talents = document.getElementById("talents");
heroinput.addEventListener("change", function(){
    for (var img of heroinput.files) 
    {
        console.log(img);
        var path = `face/${getFileName(img.name)}.${img.name.split('.').pop()}`;
        console.log(path);
        uploadBytes(storageRef(storage,path), img)
        .then((snapshot) => {
          getDownloadURL(storageRef(storage,path))
          .then((url) => {
            console.log(url);
            let downloadURL = doc(fsdatabase, "downloadURL", img.name);
            setDoc(downloadURL, 
              {URL: url,
                name: img.name,
              })
              .then(() => {
                console.log("Write data to firestore successfully done.");
              }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`Write data to firestore unsuccesful, code ${errorCode}, message ${errorMessage}`)
              });
          })
        })
        .catch((err) => {
          console.log(err.ErrorCode);
        });
    };
  });
enchantments.addEventListener("change", function(){
  for (var img of enchantments.files) 
  {
      console.log(img);
      var path = `enchantments/${getFileName(img.name)}.${img.name.split('.').pop()}`;
      console.log(path);
      uploadBytes(storageRef(storage,path), img)
      .then((snapshot) => {
        getDownloadURL(storageRef(storage,path))
        .then((url) => {
          console.log(url);
          let downloadURL = doc(fsdatabase, "downloadURL", img.name);
          setDoc(downloadURL, 
            {URL: url,
              name: img.name,
            })
            .then(() => {
              console.log("Write data to firestore successfully done.");
            }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(`Write data to firestore unsuccesful, code ${errorCode}, message ${errorMessage}`)
            });
        })
      })
      .catch((err) => {
        console.log(err.ErrorCode);
      });
  };
});
armory.addEventListener("change", function(){
  for (var img of armory.files) 
  {
      console.log(img);
      var path = `armory/${getFileName(img.name)}.${img.name.split('.').pop()}`;
      console.log(path);
      uploadBytes(storageRef(storage,path), img)
      .then((snapshot) => {
        getDownloadURL(storageRef(storage,path))
        .then((url) => {
          console.log(url);
          let downloadURL = doc(fsdatabase, "downloadURL", img.name);
          setDoc(downloadURL, 
            {URL: url,
              name: img.name,
            })
            .then(() => {
              console.log("Write data to firestore successfully done.");
            }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(`Write data to firestore unsuccesful, code ${errorCode}, message ${errorMessage}`)
            });
        })
      })
      .catch((err) => {
        console.log(err.ErrorCode);
      });
  };
});
talents.addEventListener("change", function(){
  for (var img of talents.files) 
  {
      console.log(img);
      var path = `talents/${getFileName(img.name)}.${img.name.split('.').pop()}`;
      console.log(path);
      uploadBytes(storageRef(storage,path), img)
      .then((snapshot) => {
        getDownloadURL(storageRef(storage,path))
        .then((url) => {
          console.log(url);
          let downloadURL = doc(fsdatabase, "downloadURL", img.name);
          setDoc(downloadURL, 
            {URL: url,
              name: img.name,
            })
            .then(() => {
              console.log("Write data to firestore successfully done.");
            }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(`Write data to firestore unsuccesful, code ${errorCode}, message ${errorMessage}`)
            });
        })
      })
      .catch((err) => {
        console.log(err.ErrorCode);
      });
  };
});
function getFileName(filePath) {
  const parts = filePath.split('/');
  const lastPartWithExtension = parts.pop();
  return lastPartWithExtension.split('.').slice(0, -1).join('.');
}