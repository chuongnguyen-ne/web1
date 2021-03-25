
function hientrangchu(){
    document.getElementById("sanphambanchay").style.display="block";
    document.getElementById("content").style.display="none";
}
function motaikhoan() {
    document.getElementById("admin-taikhoan").style.display = "block";
}
function dongtaikhoan() {
    document.getElementById("admin-taikhoan").style.display = "none";
}
function hienalltaikhoan(){
	document.getElementById("admin-taikhoan").style.display="block";
	document.getElementById("admin-trangsanpham").style.display="none";
	document.getElementById('addproduct').style.display="none";
	var arrtaikhoan=JSON.parse(localStorage.getItem('user'));
	var tentaikhoan="Tên tài khoản";
	var matkhau="Mật khẩu";
	var tenkh="Tên khách hàng";
	var sanpham="Sản phẩm";
	var buttonxoa213="Button xóa";
	var block="Block";
	tentaikhoan+='<p>'+arrtaikhoan[0].username+'</p>';
	matkhau+='<p>'+arrtaikhoan[0].password+'</p>';
	tenkh+='<p>'+arrtaikhoan[0].name+'</p>';
	sanpham+='<p>'+arrtaikhoan[0].giohang+'</p>';
	buttonxoa213+='<br><br><button type="button" style="width:100%;font-size:11px;margin-top: 25px;">Không cho xóa admin</button>';
	block+='<p><label class="switch"><input type="checkbox" id="admin" onchange="nutkhoataikhoan(this);" checked><span class="slider round"></span></label></p>';
	for(i=1;i<arrtaikhoan.length;i++){
		tentaikhoan+='<p>'+arrtaikhoan[i].username+'</p>';
		matkhau+='<p>'+arrtaikhoan[i].password+'</p>';
		tenkh+='<p>'+arrtaikhoan[i].name+'</p>';
		sanpham+='<p>'+arrtaikhoan[i].giohang+'</p>';
		buttonxoa213+='<br><br><button id="'+arrtaikhoan[i].username+'123" onclick="xoataikhoan(this);" type="button" value="xoa" style="width:100%;font-size:11px;margin-top: 25px;">XÓA</button>';
		if(arrtaikhoan[i].block==0){
		block+='<p><label class="switch"><input type="checkbox" id="'+arrtaikhoan[i].username+'" onchange="nutkhoataikhoan(this);" checked><span class="slider round"></span></label></p>';}
		else{
			block+='<p><label class="switch"><input type="checkbox" id="'+arrtaikhoan[i].username+'" onchange="nutkhoataikhoan(this);"><span class="slider round"></span></label></p>';
		}
	}
	document.getElementById('admin-hovaten').innerHTML=tenkh;
	document.getElementById('admin-tendangnhap').innerHTML=tentaikhoan;
	document.getElementById('admin-matkhau').innerHTML=matkhau;
	document.getElementById('admin-sanpham').innerHTML=sanpham;
	document.getElementById('admin-buttonxoataikhoan').innerHTML=buttonxoa213;
	document.getElementById('admin-blockacc').innerHTML=block;
}
function nutkhoataikhoan(obj){
	var arrtaikhoan=JSON.parse(localStorage.getItem('user'));
	var makhoa=obj.id;
	if(makhoa=="admin"){
		alert("khong the khoa admin");
		document.getElementById(makhoa).checked=true;
		return;
	}
	for(i=0;i<arrtaikhoan.length;i++){
			if(document.getElementById(arrtaikhoan[i].username).checked==true){
			    arrtaikhoan[i].block=0;
			}
			else if(document.getElementById(arrtaikhoan[i].username).checked==false){
				arrtaikhoan[i].block=1;
			}
	}
	localStorage.setItem('user',JSON.stringify(arrtaikhoan));
	//hienalltaikhoan();
}
function xoataikhoan(obj){
	var arrtaikhoan=JSON.parse(localStorage.getItem('user'));
	if(confirm('Ban muon xoa tai khoan nay?')){
		for(i=0;i<arrtaikhoan.length;i++){
			var a=arrtaikhoan[i].username+'123';
			if(a==obj.id){
				arrtaikhoan.splice(i,1);
			}
		}
		localStorage.setItem('user',JSON.stringify(arrtaikhoan));
		hienalltaikhoan();
	}
	else{
		return;
	}
}
function hienallsanpham(){
 	document.getElementById("admin-taikhoan").style.display="none";
	document.getElementById("admin-trangsanpham").style.display="block";
	document.getElementById('addproduct').style.display="none";
	var arrtheloai=JSON.parse(localStorage.getItem('product'));
	var name="Tên sản phẩm";
	var id="Mã sản phẩm";
	var price="Giá";
	var buttonxoa="Xóa";
	var suasanpham="Sửa";
	for(i=0;i<arrtheloai.length;i++){
		name+='<p>'+arrtheloai[i].name+'</p>';
		id+='<p>'+arrtheloai[i].idnumber+'</p>';
		price+='<p>'+arrtheloai[i].price+'</p>';
		buttonxoa+='<br><br><button id="'+arrtheloai[i].idnumber+'123" onclick="xoasanphamadmin(this);" type="button"style="width:100%;font-size:11px;margin-top: 25px;">XÓA</button>';
		suasanpham+='<br><br><button id="'+arrtheloai[i].idnumber+'1234" onclick="suasanphamadmin(this);" type="button" style="width:100%;font-size:11px;margin-top: 25px;">SỬA</button>';
		
	}
	document.getElementById('admin-masanpham').innerHTML=id;
	document.getElementById("admin-tensanpham").innerHTML=name;
	document.getElementById("admin-gia").innerHTML=price;
	document.getElementById("admin-buttonxoasanpham").innerHTML=buttonxoa;
	document.getElementById("admin-buttonsuasanpham").innerHTML=suasanpham;
}
function suasanphamadmin(obj){
	var arrtheloai=JSON.parse(localStorage.getItem('product'));
	for(i=0;i<arrtheloai.length;i++){
		var a=arrtheloai[i].idnumber+'1234';
		if(a==obj.id){
			document.getElementById('divngoaithaydoi').style.display="block";
			document.getElementById('suamasanpham').value=arrtheloai[i].idnumber;
			document.getElementById('suatensanpham').value=arrtheloai[i].name;
			document.getElementById('suagiasanpham').value=arrtheloai[i].price;
			document.getElementById('sualoaimuonthem').value=arrtheloai[i].types;
			break;
		}
	}
}
function thaydoisanpham(){
	var arrtheloai=JSON.parse(localStorage.getItem('product'));
	if(document.getElementById("hinhmuonsua").value==""){
		alert('Chua chèn hình!');
		return
	}
	var hinhanhthem=document.getElementById("hinhmuonsua").value;
	var dem=0;
	for(dem;dem<hinhanhthem.length;dem++){
		if(hinhanhthem[dem]=="h"){
			break;
		}
	}
	var hinhanhthem2="";
	dem++;dem++;
	var dem2=0;
	for(dem;dem<hinhanhthem.length;dem++){
		hinhanhthem2+=hinhanhthem[dem];
		dem2++;
	}
	hinhanhthem2="img/"+hinhanhthem2;
	for(i=0;i<arrtheloai.length;i++){
		if(arrtheloai[i].idnumber==document.getElementById('suamasanpham').value){
			arrtheloai[i].name=document.getElementById('suatensanpham').value;
			arrtheloai[i].price=document.getElementById('suagiasanpham').value;
			arrtheloai[i].types=document.getElementById('sualoaimuonthem').value;
			arrtheloai[i].img=hinhanhthem2;
			document.getElementById('divngoaithaydoi').style.display="none";
			break;
		}
	}
	localStorage.setItem('product',JSON.stringify(arrtheloai));
	hienallsanpham();
}
function dongsuasanpham(){
	document.getElementById('divngoaithaydoi').style.display="none";
}
function xoasanphamadmin(obj){
	var arrtheloai=JSON.parse(localStorage.getItem('product'));
	if(confirm('Ban muon xoa san pham nay?')){
		for(i=0;i<arrtheloai.length;i++){
			var a=arrtheloai[i].idnumber+'123';
			if(a==obj.id){
				if(arrtheloai.length<2){
					alert('không thể xóa sản phẩm cuối cùng trong cưa hàng hoặc hãy thêm sản phẩm vào để xóa sản phẩm này!');
					return
				}
				else{
				arrtheloai.splice(i,1);
				}
			}
		}
		localStorage.setItem('product',JSON.stringify(arrtheloai));
		hienallsanpham();
	}
	else{
		return;
	}
}
function mosanpham(){
    document.getElementById("admin-taikhoan").style.display="none";
	document.getElementById("admin-trangsanpham").style.display="block";
	document.getElementById('addproduct').style.display="none";
}
function dongsanpham(){
	document.getElementById("admin-trangsanpham").style.display="none";
}
function dongthemsanpham(){
	document.getElementById('addproduct').style.display="none";
}
function mothemsanpham(){
	document.getElementById("admin-taikhoan").style.display="none";
	document.getElementById("admin-trangsanpham").style.display="none";
	document.getElementById('addproduct').style.display="block";
}
function theloai(name,img,matl,price,types,idnumber){
	this.name=name;
	this.img=img;
	this.matl=matl;
	this.price=price;
	this.types=types;
	this.idnumber=idnumber;
}
function nhapsanpham(){
	var arrtheloai=JSON.parse(localStorage.getItem('product'));
	if(document.getElementById("tensanphamthem").value==""){
		alert('chưa nhập tên sản phẩm');
		return
	}
	if(document.getElementById("giasanphamthem").value==""){
		alert('chưa nhập giá sản phẩm');
		return
	}
	if(document.getElementById("loaimuonthem").value==""){
		alert('chưa nhập loại sản phẩm');
		return
	}
	if(document.getElementById("idsanphamthem").value==""){
		alert('chưa nhập id sản phẩm');
		return
	}
	if(document.getElementById("hinhmuonthem").value==""){
		alert('chưa thêm hình sản phẩm');
		return
	}
	var idcuabe=document.getElementById("idsanphamthem").value;
	for(var i=0;i<arrtheloai.length;i++){
		if(idcuabe==arrtheloai[i].idnumber){
			alert('Trung ma san pham');
			return;
		}
	}
	var hinhanhthem=document.getElementById("hinhmuonthem").value;
	var dem=0;
	for(dem;dem<hinhanhthem.length;dem++){
		if(hinhanhthem[dem]=="h"){
			break;
		}
	}
	var hinhanhthem2="";
	dem++;dem++;
	var dem2=0;
	for(dem;dem<hinhanhthem.length;dem++){
		hinhanhthem2+=hinhanhthem[dem];
		dem2++;
	}
	hinhanhthem2="img/"+hinhanhthem2;
	//alert(hinhanhthem2);
	var theloaimoi=new theloai(document.getElementById("tensanphamthem").value,hinhanhthem2,"gg",document.getElementById("giasanphamthem").value,document.getElementById("loaimuonthem").value,document.getElementById("idsanphamthem").value);
	arrtheloai.push(theloaimoi);
	localStorage.setItem('product',JSON.stringify(arrtheloai));
	alert('thêm thành công');
	return hienallsanpham();
}