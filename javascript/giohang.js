	var tongsoluongtrongiohang=0;
	var d=0;
	function khongam(obj){
		var g=obj;
		while(document.getElementById(g.id).value<1){
			document.getElementById(g.id).value=1;
		}
	}
	function deleteitem(obj){
		for(i=0;i<arrgiohang.length;i++){
			if(obj.id==arrgiohang[i].idnumber){
				arrgiohang.splice(i,1);
				d--;
			}
		}
		//tongcong();
		hiensanphamtrengiohang();
	}
	function hiengiohang(){
		document.getElementById('myModal').style.display="block";
	}
	function closegiohang(){
		document.getElementById('myModal').style.display="none";
	}
	function addgiohang(obj){
		var g=obj;
		var arrtheloai=JSON.parse(localStorage.getItem('product'));
		if(localStorage.getItem('user1')==null){
			alert('ban chua dang nhap');
			return mo2();
		}
		for(j=0;j<arrgiohang.length;j++){
			if(arrgiohang[j].idnumber==g.id){
				alert("Đã có trong giỏ hàng");
				return;
			}
		}
		for(i=0;i<arrtheloai.length;i++){
			if(arrtheloai[i].idnumber==g.id){//them san pham vao gio hang
				arrgiohang[d]=new giohang("","","","","","");
				arrgiohang[d].name=arrtheloai[i].name;
				arrgiohang[d].img=arrtheloai[i].img;
				arrgiohang[d].matl=arrtheloai[i].matl;
				arrgiohang[d].price=arrtheloai[i].price;
				arrgiohang[d].types=arrtheloai[i].types;
				arrgiohang[d].idnumber=arrtheloai[i].idnumber;
				arrgiohang[d].quantity=1;
				d++;
				break;
			}
		}
		hiensanphamtrengiohang();
	}
	function hiensanphamtrengiohang(){
		var k=1;
		var tensanpham="";
		var tongcong=0;
		var userarray=JSON.parse(localStorage.getItem('user1'));
		
		userarray.giohang="";
		for(i=0;i<arrgiohang.length;i++){//hien san pham va tong tien len khung gio hang
				var a='<div class="cart-items"><span id="loai'+i+'" class="cart-item cart-header cart-column">'+arrgiohang[i].name+'</span><span class="cart-price cart-header cart-column">'+arrgiohang[i].price+'</span><input id="loai'+k+'" type="number" value="'+arrgiohang[i].quantity+'" class="cart-quantity cart-header cart-column" onchange="tongtien(this);"><button id="'+arrgiohang[i].idnumber+'" onclick="deleteitem(this);">Xóa</button></div>';
				userarray.giohang=userarray.giohang+arrgiohang[i].idnumber+", ";
				k++;
				tongcong+=parseInt(arrgiohang[i].price)*parseInt(arrgiohang[i].quantity);
				tensanpham=tensanpham+a;
		}
		localStorage.setItem('user1',JSON.stringify(userarray));
		tongsoluongtrongiohang=k;
		tongcong+="VNĐ";
		document.getElementById('sumprice').innerHTML=tongcong;
		document.getElementById('items').innerHTML=tensanpham;
	}
	function tongtien(obj){
		var g=obj;
		while(document.getElementById(g.id).value<1){
			document.getElementById(g.id).value=1;
		}
		var tongcong=0;
		var h=0;
		for(i=1;i<=(tongsoluongtrongiohang-1);i++){
			var a=document.getElementById('loai'+i).value*parseInt(arrgiohang[h].price);
			arrgiohang[h].quantity=document.getElementById('loai'+i).value;
			h++;
			tongcong=tongcong+a;
		}
		tongcong+="VNĐ";
		document.getElementById('sumprice').innerHTML=tongcong;
	}
	function thanhtoangiohang(){
		if(confirm('Muốn thanh toán à?')){
		}
		else{
			return false;
		}
		var arrtaikhoan=JSON.parse(localStorage.getItem('user'));
		var arrtaikhoan1=JSON.parse(localStorage.getItem('user1'));
		for(i=0;i<arrtaikhoan.length;i++){
			if(arrtaikhoan1.username==arrtaikhoan[i].username){
				arrtaikhoan[i].giohang=arrtaikhoan1.giohang;
			}
		}
		for(i=0;i<arrgiohang.length;i++){
				arrgiohang.splice(i,1);
				d--;
		}
		d=0;
		arrgiohang.length=0;
		hiensanphamtrengiohang();
		localStorage.setItem('user',JSON.stringify(arrtaikhoan));
	}