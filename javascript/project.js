// JavaScript Document
creatadmin();

function chensotrang() {
    var s = "";
    var arraysanpham = JSON.parse(localStorage.getItem('product'));
    // Xóa +1 đi cũng không sao.
    for (i = 1; i <= (((arraysanpham.length) / 8) + 1); i++) {
        s = s + '<a href="#' + i + '"><div id="trang12568' + i + '" class="trang" onclick="chuyentrang(this);">' + i + '</div></a>';
    }
    document.getElementById('divsotrang').innerHTML = s;
}

function chuyentrang(obj) {
    var ida = obj.id;
    ida = parseInt(ida[10]);
    alert(ida);
    var arraysanpham = JSON.parse(localStorage.getItem('product'));
    for (var i = 1; i <= (arraysanpham.length) / 8 + 1; i++) {
        if (i == ida) {
            //idgido="trang1256"+(i-1);
            //document.getElementById(idgido).style.background="#FFFFFF";
            document.getElementById(obj.id).style.background = "#04ADF9";
        } else {
            idgido = "trang12568" + (i);
            document.getElementById(idgido).style.background = "#FFFFFF";
        }
    }
    if (ida >= 1) {
        var b = "";
        var k = ida;
        for (i = ((ida - 1) * 8 + 1); i <= arraysanpham.length; i++) { //i chạy từ đầu trang
            b = b + '<div class="khung" id="khung1000' + i + '"></div>'; //tạo khung
            if (i == ida * 8) k++; //nếu i=cuối trang số trang tăng lên
            if (((k - 1) * 8) == (8 * ida)) { //nếu đủ sản phẩm trong 1 trang break
                break;
            }
        }
        b += '<div style="clear:both"></div>';
        document.getElementById('khung2').innerHTML = b;
        var h = ida;
        for (j = ((ida - 1) * 8 + 1); j <= arraysanpham.length; j++) { //j chạy từ đầu trang
            var imga = '<img src="' + arraysanpham[j - 1].img + '" class="hinh">'
                + '<div class="tensanpham">' + arraysanpham[j - 1].name + '</div>'
                + '<div class="tengia">giá: ' + arraysanpham[j - 1].price + '</div>'
                + '<input type="button" value="Chi tiết" id="' + arraysanpham[j - 1].idnumber + '8899" onclick="button_chitietsanpham(this)"/>';

            document.getElementById('khung1000' + j).innerHTML = imga; //dán hình vào khung
            if (j == ida * 8) h++; //nếu j=cuối trang số trang tăng lên
            if (((h - 1) * 8) == (8 * ida)) { //nếu đủ sản phẩm trong 1 trang break
                break;
            }
        }
    }
}

function chondog(obj) {
    //document.getElementById("sanphambanchay").innerHTML="";
    var s = "";
    var arrtheloai = JSON.parse(localStorage.getItem('product'));
    var arraymayconcho = [];
    var soconcho = 0;
    for (var i = 0; i < arrtheloai.length; i++) {
        if (arrtheloai[i].types == "dog") {
            arraymayconcho[soconcho] = arrtheloai[i];
            soconcho++;
        }
    }
    for (i = 1; i <= (((arraymayconcho.length) / 8) + 1); i++) {
        s = s + '<a href="#' + i + '"><div id="trang1256' + i + '" class="trang" onclick="chuyentrangdog(this);">' + i + '</div></a>';
    }
    v = '<h2>CHÓ CẢNH</h2>';
    document.getElementById('divsotrang2').innerHTML = s;
    document.getElementById("content").style.display = "block";
    document.getElementById("sanphambanchay").style.display = "none";
    document.getElementById("divsotrang").style.display = "none";
    document.getElementById("divsotrang2").style.display = "block";
    var g;
    g = obj;
    var dem = 0;
    s = "";
    for (i = 0; i < arrtheloai.length; i++) {
        if (arrtheloai[i].types == g.id) {
            dem++;
        }
    }
    for (j = 0; j < dem; j++) {
        var b = '<div class="khung" id="khung' + j + '"></div>';
        s += b;
        if (j == 7) break;
    }
    s = s + '<div style="clear:both"></div>';
    document.getElementById("content").innerHTML = v + s;
    var k = 0;
    for (i = 0; i < arrtheloai.length; i++) {
        if (arrtheloai[i].types == g.id) {
            var imga = '<img src="' + arrtheloai[i].img + '" class="hinh"><div class="tensanpham">' + arrtheloai[i].name + '</div><div class="tengia">giá: ' + arrtheloai[i].price + '</div><input type="button" value="Chi tiết" id="' + arrtheloai[i].idnumber + '8899" onclick="button_chitietsanpham(this)"/>';
            document.getElementById('khung' + k).innerHTML = imga;
            if (k == 7) break;
            else k++;
        }
    }
    document.getElementById("banner").style.display = "none";
}

function chuyentrangdog(obj) {
    var ida = obj.id;
    ida = parseInt(ida[9])
    alert(ida);
    var arraysanpham = JSON.parse(localStorage.getItem('product'));
    var dem = 0;
    s = "";
    var arraymayconcho = [];
    var soconcho = 0;
    for (var i = 0; i < arraysanpham.length; i++) {
        if (arraysanpham[i].types == "dog") {
            arraymayconcho[soconcho] = arraysanpham[i];
            soconcho++;
        }
    }
    for (var i = 1; i <= (arraymayconcho.length) / 8 + 1; i++) {
        if (i == ida) {
            //idgido="trang1256"+(i-1);
            //document.getElementById(idgido).style.background="#FFFFFF";
            document.getElementById(obj.id).style.background = "#04ADF9";
        } else {
            idgido = "trang1256" + (i);
            document.getElementById(idgido).style.background = "#FFFFFF";
        }
    }
    if (ida >= 1) {
        var b = "";
        var k = ida;
        for (var i = ((ida - 1) * 8 + 1); i <= arraymayconcho.length; i++) { //i chạy từ đầu trang
            b = b + '<div class="khung" id="khung10000' + i + '"></div>'; //tạo khung
            if (i == ida * 8) k++; //nếu i=cuối trang số trang tăng lên
            if (((k - 1) * 8) == (8 * ida)) { //nếu đủ sản phẩm trong 1 trang break
                break;
            }
        }
        b += '<div style="clear:both"></div>';
        document.getElementById('content').innerHTML = b;
        var h = ida;
        for (var j = ((ida - 1) * 8 + 1); j <= arraymayconcho.length; j++) { //j chạy từ đầu trang
            var imga = '<img src="' + arraymayconcho[j - 1].img + '" class="hinh"><div class="tensanpham">' + arraymayconcho[j - 1].name + '</div><div class="tengia">giá: ' + arraymayconcho[j - 1].price + '</div><input type="button" value="Chi tiết" id="' + arraymayconcho[j - 1].idnumber + '8899" onclick="button_chitietsanpham(this)"/>';

            document.getElementById('khung10000' + j).innerHTML = imga; //dán hình vào khung
            if (j == ida * 8) h++; //nếu j=cuối trang số trang tăng lên
            if (((h - 1) * 8) == (8 * ida)) { //nếu đủ sản phẩm trong 1 trang break
                break;
            }
        }
    }
}

function choncat(obj) {
    //document.getElementById("sanphambanchay").innerHTML="";
    var s = "";
    var arrtheloai = JSON.parse(localStorage.getItem('product'));
    var arraymayconcho = [];
    var soconcho = 0;
    for (var i = 0; i < arrtheloai.length; i++) {
        if (arrtheloai[i].types == "cat") {
            arraymayconcho[soconcho] = arrtheloai[i];
            soconcho++;
        }
    }
    for (i = 1; i <= (((arraymayconcho.length) / 8) + 1); i++) {
        s = s + '<a href="#' + i + '"><div id="trang1256' + i + '" class="trang" onclick="chuyentrangcat(this);">' + i + '</div></a>';
    }
    v = '<h2>MÈO CẢNH</h2>';
    document.getElementById('divsotrang2').innerHTML = s;
    document.getElementById("content").style.display = "block";
    document.getElementById("sanphambanchay").style.display = "none";
    document.getElementById("divsotrang").style.display = "none";
    document.getElementById("divsotrang2").style.display = "block";
    var g;
    g = obj;
    var dem = 0;
    s = "";
    for (i = 0; i < arrtheloai.length; i++) {
        if (arrtheloai[i].types == g.id) {
            dem++;
        }
    }
    for (j = 0; j < dem; j++) {
        var b = '<div class="khung" id="khung' + j + '"></div>';
        s += b;
        if (j == 7) break;
    }
    s = s + '<div style="clear:both"></div>';
    document.getElementById("content").innerHTML = v + s;
    var k = 0;
    for (i = 0; i < arrtheloai.length; i++) {
        if (arrtheloai[i].types == g.id) {
            var imga = '<img src="' + arrtheloai[i].img + '" class="hinh"><div class="tensanpham">' + arrtheloai[i].name + '</div><div class="tengia">giá: ' + arrtheloai[i].price + '</div><input type="button" value="Chi tiết" id="' + arrtheloai[i].idnumber + '8899" onclick="button_chitietsanpham(this)"/>';
            document.getElementById('khung' + k).innerHTML = imga;
            if (k == 7) break;
            else k++;
        }
    }
    document.getElementById("banner").style.display = "none";
}

function chuyentrangcat(obj) {
    var ida = obj.id;
    ida = parseInt(ida[9])
    alert(ida);
    var dem = 0;
    s = "";
    var arraysanpham = JSON.parse(localStorage.getItem('product'));
    var arraymayconcho = [];
    var soconcho = 0;

    for (var i = 0; i < arraysanpham.length; i++) {
        if (arraysanpham[i].types == "cat") {
            arraymayconcho[soconcho] = arraysanpham[i];
            soconcho++;
        }
    }
    for (var i = 1; i <= (arraymayconcho.length) / 8 + 1; i++) {
        if (i == ida) {
            document.getElementById(obj.id).style.background = "#04ADF9";
        } else {
            idgido = "trang1256" + (i);
            document.getElementById(idgido).style.background = "#FFFFFF";
        }
    }
    if (ida >= 1) {
        var b = "";
        var k = ida;
        for (var i = ((ida - 1) * 8 + 1); i <= arraymayconcho.length; i++) { //i chạy từ đầu trang
            b = b + '<div class="khung" id="khung10000' + i + '"></div>'; //tạo khung
            if (i == ida * 8) k++; //nếu i=cuối trang số trang tăng lên
            if (((k - 1) * 8) == (8 * ida)) { //nếu đủ sản phẩm trong 1 trang break
                break;
            }
        }
        b += '<div style="clear:both"></div>';
        document.getElementById("content").innerHTML = b;
        var h = ida;
        for (var j = ((ida - 1) * 8 + 1); j <= arraymayconcho.length; j++) { //j chạy từ đầu trang
            var imga = '<img src="' + arraymayconcho[j - 1].img + '" class="hinh"><div class="tensanpham">' + arraymayconcho[j - 1].name + '</div><div class="tengia">giá: ' + arraymayconcho[j - 1].price + '</div><input type="button" value="Chi tiết" id="' + arraymayconcho[j - 1].idnumber + '8899" onclick="button_chitietsanpham(this)"/>';

            document.getElementById('khung10000' + j).innerHTML = imga; //dán hình vào khung
            if (j == ida * 8) h++; //nếu j=cuối trang số trang tăng lên
            if (((h - 1) * 8) == (8 * ida)) { //nếu đủ sản phẩm trong 1 trang break
                break;
            }
        }
    }
}

function button_chitietsanpham(obj) {
    var arraysanpham = JSON.parse(localStorage.getItem('product'));
    for (i = 0; i < arraysanpham.length; i++) {
        var a = arraysanpham[i].idnumber + '8899';
        if (a == obj.id) {
            document.getElementById("register").style.display = "none";
            document.getElementById("login").style.display = "none";
            document.getElementById('khung-chitietsanpham1').style.display = "block";
            document.getElementById('chitietten').value = arraysanpham[i].name;
            document.getElementById('chitietid').value = arraysanpham[i].idnumber;
            document.getElementById('chitietgia').value = arraysanpham[i].price;
            document.getElementById('chitietloai').value = arraysanpham[i].types;
            document.getElementById('khungchitietbentrai').innerHTML = '<img src="' + arraysanpham[i].img + '" class="hinhne"><input type="button" value="Mua" id="' + arraysanpham[i].idnumber + '" onclick="addgiohang(this)"/>'
        }
    }
}

function dongkhungchitietsanpham() {
    document.getElementById("khung-chitietsanpham1").style.display = "none";
}

function creatadmin() {
    if (localStorage.getItem('user') == null) {
        var userarray = [];
        var user = {
            name: "ADMIN",
            username: "admin",
            password: "123456",
            email: "aaa@gmail.com",
            giohang: "",
            block: 0
        };
        userarray.push(user);
        localStorage.setItem('user', JSON.stringify(userarray));
    }
    //localStorage.setItem('user',JSON.stringify(userarray));
    //name:"ADMIN",username:"admin", password:"123456",email:"aaa@gmail.com",giohang:""}
}

function ktdk() {
    var arrtaikhoan = JSON.parse(localStorage.getItem('user'));
    //var arrtaikhoan=JSON.parse(localStorage.getItem('user'));
    console.log(arrtaikhoan);
    if (document.getElementById("hovaten").value == "") {
        alert("Họ và tên không hợp lệ");
        document.getElementById("hovaten").focus();
        return false;
    }
    if (document.getElementById("tendangnhap").value == "") {
        alert("Tên đăng nhập không hợp lệ");
        document.getElementById("tendangnhap").focus();
        return false;
    }
    if (document.getElementById("password").value == "") {
        alert("Mật khẩu không hợp lệ");
        document.getElementById("password").focus();
        return false;
    }
    if (document.getElementById("email").value == "") {
        alert("Email không hợp lệ");
        document.getElementById("email").focus();
        return false;
    }
    for (i = 0; i < arrtaikhoan.length; i++) {
        if (arrtaikhoan[i].username == document.getElementById("tendangnhap").value) {
            alert("Tên đăng nhập đã có!");
            document.getElementById("tendangnhap").focus();
            return false;
        }
        if (arrtaikhoan[i].email == document.getElementById("email").value) {
            alert("email đã có!");
            document.getElementById("email").focus();
            return false;
        }
    }
    var user = {
        name: document.getElementById("hovaten").value,
        username: document.getElementById("tendangnhap").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
        giohang: "",
        block: 0
    };
    arrtaikhoan.push(user);
    localStorage.setItem('user', JSON.stringify(arrtaikhoan));
    console.log(JSON.parse(localStorage.user));
    alert('Đăng ký thành công');
    return true;

}

function ktdn() {
    var arrtaikhoan = JSON.parse(localStorage.getItem('user'));
    if (arrtaikhoan[0].username == document.getElementById("tendangnhap1").value && arrtaikhoan[0].password == document.getElementById("password1").value) {
        alert("Đăng nhập admin thành công");
        localStorage.setItem('user1', JSON.stringify(arrtaikhoan[0]));
        return true;
    }
    if (document.getElementById("tendangnhap1").value == "") {
        alert("Chưa nhập username")
        document.getElementById("tendangnhap1").focus();
        return false;
    }
    if (document.getElementById("password1").value == "") {
        alert("Chưa nhập password")
        document.getElementById("password1").focus();
        return false;
    }
    console.log(arrtaikhoan);
    for (i = 0; i < arrtaikhoan.length; i++) {
        if (document.getElementById("tendangnhap1").value == arrtaikhoan[i].username && document.getElementById("password1").value == arrtaikhoan[i].password && arrtaikhoan[i].block == 0) {
            alert('dang nhap thanh cong');
            localStorage.setItem('user1', JSON.stringify(arrtaikhoan[i]));
            //document.getElementById('logout').style.display="block";
            return true;
        } else if (arrtaikhoan[i].block == 1) {
            alert('Tài khoản bị khóa');
            return false;
        }

    }
    alert('tên đăng nhập hoặc mật khẩu không đúng!');
    return false;
}

function kiemtradangnhaphaychua() {
    var arrtaikhoan1 = JSON.parse(localStorage.getItem('user1'));
    var arrtaikhoan = JSON.parse(localStorage.getItem('user'));
    if (localStorage.getItem('user1')) {
        document.getElementById('dangky11').style.display = "none";
        document.getElementById('dangnhap11').style.display = "none";
        document.getElementById('logout').style.display = "block";
        document.getElementById('nutmoadmin').style.display = "none";
        document.getElementById('tenkhachhang').innerHTML = "Xin chào " + arrtaikhoan1.name;
        document.getElementById('tenkhachhang').style.display = "block";
    } else {
        document.getElementById('dangky11').style.display = "block";
        document.getElementById('dangnhap11').style.display = "block";
        document.getElementById('logout').style.display = "none";
        document.getElementById('nutmoadmin').style.display = "none";
        document.getElementById('tenkhachhang').style.display = "none";
        return;
    }
    if (arrtaikhoan1.username == arrtaikhoan[0].username) {
        document.getElementById('dangky11').style.display = "none";
        document.getElementById('dangnhap11').style.display = "none";
        document.getElementById('tenkhachhang').innerHTML = "Xin chào " + arrtaikhoan1.name;
        document.getElementById('tenkhachhang').style.display = "block";
        document.getElementById('logout').style.display = "block";
        document.getElementById('nutmoadmin').style.display = "block";
        return;
    }
}

function dangxuat() {
    localStorage.removeItem('user1');
    document.getElementById('items').innerHTML = "";
    document.getElementById('sumprice').innerHTML = "";
    if (!localStorage.getItem('user1')) {
        kiemtradangnhaphaychua();
    }
}

function mo2() {
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
    document.getElementById("myModal").style.display = "none";
    document.getElementById("khung-chitietsanpham1").style.display = "none";
}

function mo() {
    document.getElementById("register").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("myModal").style.display = "none";
    document.getElementById("khung-chitietsanpham1").style.display = "none";
}

function dong2() {
    document.getElementById("login").style.display = "none";
}

function dong() {
    document.getElementById("register").style.display = "none";

}

function hientrangchu() {
    document.getElementById("content").innerHTML = "";
    document.getElementById("sanphambanchay").style.display = "block";
    document.getElementById("divsotrang").style.display = "block";
    document.getElementById("content").style.display = "none";
    document.getElementById("divsotrang2").style.display = "none";
    document.getElementById("banner").style.display = "block";
}

function mo1() {
    document.getElementById("chungtoi").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("myModal").style.display = "none";
    document.getElementById("register").style.display = "none";
}

function dong1() {
    document.getElementById("chungtoi").style.display = "none";
}

function xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}

function search() {
    document.getElementById('divsotrang').style.display = "none";
    document.getElementById('divsotrang2').style.display = "block";
    document.getElementById('sanphambanchay').style.display = "none";
    document.getElementById('content').style.display = "block";
    var arraysanpham = JSON.parse(localStorage.getItem('product'));
    var s = document.getElementById("timkiemnha").value;
    s = xoa_dau(s);
    s = s.toLowerCase();
    var khung = "";
    var b = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "?", "<", ">", "{", "}", "[", "]", ";", ":", "'", "/"];
    var c = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "?", "<", ">", "{", "}", "[", "]", ";", ":", "'", "/"];
    var arry = [];
    for (i = 0; i < arraysanpham.length; i++) {
        var temp = arraysanpham[i].name;
        temp = xoa_dau(temp);
        temp = temp.toLowerCase();
        arry[i] = temp;

    }
    var dem = 0;
    for (var i = 0; i < arry.length; i++) {
        if (0 <= arry[i].indexOf(s) && arry[i].indexOf(s) <= arry[i].length) {
            khung += '<div class="khung" id="khung100000' + i + '"></div>';
            dem++;
            if (dem == 8) break;
        }
    }
    khung+='<div style="clear:both"></div>';
    document.getElementById("content").innerHTML = khung;
    var dem2 = 0;
    for (var i = 0; i < arry.length; i++) {
        if (0 <= arry[i].indexOf(s) && arry[i].indexOf(s) <= arry[i].length) {
            dem2++;
        }
    }
    var sotrang = "";
    for (var i = 1; i <=parseInt(dem2 / 8 + 1); i++) {
        if(parseInt(dem2 / 8 + 1)==1){
          break;
        }
        sotrang = sotrang + '<a href="#' + i + '"><div id="trang12569' + i + '" class="trang" onclick="chuyentrangtimkiem(this);">' + i + '</div></a>';
    }
    document.getElementById('divsotrang2').innerHTML = sotrang;
    for (var i = 0; i < arry.length; i++) {
        if (0 <= arry[i].indexOf(s) && arry[i].indexOf(s) <= arry[i].length) {
            var imga = '<img src="' + arraysanpham[i].img + '" class="hinh"><div class="tensanpham">' + arraysanpham[i].name + '</div><div class="tengia">giá: ' + arraysanpham[i].price + '</div><input type="button" value="Chi tiết" id="' + arraysanpham[i].idnumber + '8899" onclick="button_chitietsanpham(this)"/>';
            document.getElementById('khung100000' + i).innerHTML = imga;
        }
    }
    for (var i = 0; i < b.length; i++) {
        if (0 <= s.indexOf(b[i])) {
            alert("thông tin tìm kiếm không hợp lệ");
            alert: '#DD6B55';
            break;
        }
    }
}

function chuyentrangtimkiem(obj) {
    var ida = obj.id;
    ida = parseInt(ida[10])
    alert(ida);
    var dem = 0;
    var arraysanpham = JSON.parse(localStorage.getItem('product'));
    var s = document.getElementById("timkiemnha").value;
    s = xoa_dau(s);
    s = s.toLowerCase();
    var khung = "";
    var b = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "?", "<", ">", "{", "}", "[", "]", ";", ":", "'", "/"];
    //var c = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "?", "<", ">", "{", "}", "[", "]", ";", ":", "'", "/"];
    var arry = [];
    var arraysanphamtimkiem = [];
    for (i = 0; i < arraysanpham.length; i++) {
        var temp = arraysanpham[i].name;
        temp = xoa_dau(temp);
        temp = temp.toLowerCase();
        arry[i] = temp;
    }
    var dem10 = 0;
    for (var i = 0; i < arry.length; i++) {
        if (0 <= arry[i].indexOf(s) && arry[i].indexOf(s) <= arry[i].length) {
            arraysanphamtimkiem[dem10] = arraysanpham[i];
            dem10++;
        }
    }
      for (var i = 1; i <= (arraysanphamtimkiem.length) / 8 + 1; i++) {
        if (i == ida) {
            document.getElementById(obj.id).style.background = "#04ADF9";
        } else {
            idgido = "trang12569" + (i);
            document.getElementById(idgido).style.background = "#FFFFFF";
        }
    }
    if (ida >= 1) {
        var babyshark = "";
        var k = ida;
        for (var i = ((ida - 1) * 8 + 1); i <= arraysanphamtimkiem.length; i++) { //i chạy từ đầu trang
            babyshark += '<div class="khung" id="khung10000' + i + '"></div>'; //tạo khung
            if (i == ida * 8) k++; //nếu i=cuối trang số trang tăng lên
            if (((k - 1) * 8) == (8 * ida)) { //nếu đủ sản phẩm trong 1 trang break
                break;
            }
        }
        babyshark += '<div style="clear:both"></div>';
        document.getElementById("content").innerHTML = babyshark;
        var h = ida;
        for (var j = ((ida - 1) * 8 + 1); j <= arraysanphamtimkiem.length; j++) { //j chạy từ đầu trang
            var imga = '<img src="' + arraysanphamtimkiem[j - 1].img + '" class="hinh"><div class="tensanpham">' + arraysanphamtimkiem[j - 1].name + '</div><div class="tengia">giá: ' + arraysanphamtimkiem[j - 1].price + '</div><input type="button" value="Chi tiết" id="' + arraysanphamtimkiem[j - 1].idnumber + '8899" onclick="button_chitietsanpham(this)"/>';
            document.getElementById('khung10000' + j).innerHTML = imga; //dán hình vào khung
            if (j == ida * 8) h++; //nếu j=cuối trang số trang tăng lên
            if (((h - 1) * 8) == (8 * ida)) { //nếu đủ sản phẩm trong 1 trang break
                break;
            }
        }
    }
}

