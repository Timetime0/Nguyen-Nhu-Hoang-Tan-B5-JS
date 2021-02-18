function getEle(ele){
    return document.getElementById(ele);
}

btn1 = getEle("btn1");
btn1.addEventListener("click", function(){
    diem1 = parseFloat(getEle("mon1").value);
    diem2 = parseFloat(getEle("mon2").value);
    diem3 = parseFloat(getEle("mon3").value);
    var diem3Mon = diem1 + diem2 + diem3
    
    //Khu vực
    var diemCongVung = 0;
    var mangArea = document.getElementsByName("area");
    var lengthMangArea = mangArea.length;
    var mangNewArea = [];
    for (i=0;i<lengthMangArea;i++){
        if (mangArea[i].checked == true){
            mangNewArea.push(mangArea[i].value);
            // giá trị được gán ở bên index.html
        }
    }
    // Đối tượng 
    var diemCongDoiTuong = 0;
    var mangObject = document.getElementsByName("uuTien");
    var lengthMangObject = mangObject.length;
    var mangNewObject = [];
    for (j=0;j<lengthMangObject;j++){
        if (mangObject[j].checked == true){
            mangNewObject.push(mangObject[j].value);
            // giá trị được gán ở bên index.html
        }
    }

    // Tổng điểm
    var tongDiem = diem3Mon + parseFloat(mangNewArea[0]) + parseFloat(mangNewObject[0]);
    
    thongbao1 = getEle("thongbao1");
    thongbao1.innerHTML = "Tổng điểm: " + tongDiem;
})

// ------------------------------------------------------------------

const giaTienDien = [500,650,850,1100,1300];

// Tinh tien dien
var tinhTongTien = function (soKm){
    var tongTien = 0;
    if (soKm <= 50){
        tongTien = soKm*giaTienDien[0] ;
    } else if (soKm > 50 && soKm <= 100){
        tongTien = giaTienDien[0]*50 + (soKm-50)*giaTienDien[1];
    } else if (soKm > 100 && soKm <= 150){
        tongTien = giaTienDien[0]*50 + 50*giaTienDien[1] + (soKm-100)*giaTienDien[2];
    } else if (soKm > 150 && soKm <= 200){
        tongTien =  giaTienDien[0]*50 + 50*giaTienDien[1] + 50*giaTienDien[2] + (soKm-150)*giaTienDien[3];
    }else {
        tongTien =  giaTienDien[0]*50 + 50*giaTienDien[1] + 50*giaTienDien[2] + 50*giaTienDien[3] + (soKm-200)*giaTienDien[4];
    }
    return tongTien;
}



btn2 = getEle("btn2");
btn2.addEventListener("click", function(){
    ten = getEle("hoTen").value;
    soKw = parseFloat(getEle("soKw").value);
    var tienDien = 0;
    tienDien = tinhTongTien(soKw);
   
    thongbao2 = getEle("thongbao2");
    thongbao2.innerHTML = ten + " ,số kW điện đã sử dụng là: " + soKw  + "<br> Thành tiền: " + tienDien;

})