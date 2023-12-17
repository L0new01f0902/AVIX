import { fsdatabase } from "./config.js";
import {getDocs, collection} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const imgNames = collection(fsdatabase, "armory");
var name = ["Kiếm Ngắn","Dao Găm","Găng Tay","Chùy Máu","Chùy Xích","Kiếm Dài","Chùy Cổ","Song Đao", "Thương Đấu Sĩ","Phi Tiêu","Huyết Cung","Gươm Uriel","Đao Truy Hồn","Liềm Đoạt Mệnh","Cung Tà Ma","Thương Khung Kiếm","Diệt Thần Cung","Thương Longinus","Kiếm Fafnir","Thánh Kiếm","Kiếm Muramasa","Quỷ Kiếm","Phức Hợp Kiếm","Song Đao Bão Táp","Nanh Fenrir","Gươm Sấm Sét","Vuốt Hung Tàn","Thương Xuyên Phá","Xạ Nhật Cung","Sách Phép","Nhẫn Lapis","Dây Chuyền Ma Thuật","Sách Cổ","Nhẫn Ma Pháp","Sớ Ma Thuật","Gươm Nguyên Tố","Mặt Nạ Ma Quái","Phượng Hoàng Lệ","Vòng Đức Hạnh","Huyết Trượng","Trượng Hỗn Mang","Xuyên Tâm Lệnh","Sách Truy Hồn","Dây Chuyền Lục Bảo","Cầu Chiêm Tinh","Trượng Bùng Nổ","Vương Miện Hecate","Ngọc Đại Pháp Sư","Quyền Trượng Rhea","Thập Tự Kiếm","Trượng Băng","Mặt Nạ Berith","Gươm Tận Thế","Gươm Hiền Triết","Sách Thánh","Quả Cầu Băng Sương","Băng Nhẫn Skadi","Nhẫn Hồng Ngọc","Giáp Nhẹ","Găng Giác Đấu","Bùa Sức Mạnh","Dây Chuyền Hồng Ngọc","Giáp Chân","Tim Incubus","Đai Kháng Phép","Găng Bạch Kim","Giáp Hiệp Sĩ","Giáp Thống Khổ","Hercules Thịnh Nộ","Giáp Cuồng Nộ","Áo Choàng Thần Ra","Khiên Thất Truyền","Khiên Huyền Thoại","Giáp Gaia","Huân Chương Troy","Rìu Hyoga","Giáp Hộ Mệnh","Áo Choàng Băng Giá","Phù Chú Trường Sinh","Nham Thuẫn","Giáp Thép","Giày Hộ Vệ","Giày Kiên Cường","Giày Thuật Sĩ","Giày Phù Thủy","Giày Du Mục","Giày Hermes","Rựa Thợ Săn","Gươm Hiến Tế","Rìu Gnoll","Đao Truy Kích","Cung Gió Lốc","Gươm Loki","Rìu Leviathan","Kiếm Truy Hồn","Cung Bão Tố","Nguyên Tố Bảo Thạch","Thổ Hệ Bảo Thạch","Thủy Hệ Bảo Thạch","Hỏa Hệ Bảo Thạch"]
window.addEventListener("load", function(){
    getDocs(imgNames).then((results) => {
        console.log(results)
        const fileNames = results._snapshot.docChanges;
        console.log(fileNames);
        for (let i = 0; i < fileNames.length; i++) {
            let armoryFileName = fileNames[i].doc.data.value.mapValue.fields.URL.stringValue;
            console.log(armoryFileName);
            let img = document.createElement('img');
            let heroTemplate = document.createElement('div');
            let URL = document.createElement('a');
            let Name = document.createElement('h3');
            let armoryNames = fileNames[i].doc.data.value.mapValue.fields.name.stringValue;
            console.log(armoryNames);
            Name.innerHTML = name[i];
            URL.setAttribute('href', './hero-template.html');
            img.setAttribute('src', armoryFileName);
            img.setAttribute('class', i);
            heroTemplate.setAttribute('class', i)
            let imgArray = document.getElementById('armorylist');
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
