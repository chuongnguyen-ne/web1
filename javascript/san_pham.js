createproduct();
function theloai(name,img,matl,price,types,idnumber){
	this.name=name;
	this.img=img;
	this.matl=matl;
	this.price=price;
	this.types=types;
	this.idnumber=idnumber;
}
function giohang(name,img,matl,price,types,idnumber,quantity){
		this.name=name;
		this.img=img;
		this.matl=matl;
		this.price=price;
		this.types=types;
		this.idnumber=idnumber;
		this.quantity=quantity;
	}
function createproduct(){
	if(localStorage.getItem('product')==null){
			var arrtheloai=[
				new theloai	('Shiba','img/shiba.jpg','sb','500','dog','4569869'),
				new theloai	('Husky','img/husky.jpg','hk','500','dog','6545646'),
				new theloai	('Cheems','img/cheems.jpg','cheems','500','dog','65445668'),
				new theloai	('Corgi','img/corgi.jpg','corgi','500','dog','5458425848'),
				new theloai	('Mèo anh lông ngắn xám','img/meoanhlongngangray.jpg','ecate','500','cat','566556896'),
				new theloai	('Mèo anh lông ngắn vàng','img/meoanhlongnganyellow.jpg','ecate','500','cat','65462589'),
				new theloai	('Mèo tam thể','img/meotamthe.jpg','mtt','500','cat','589652412'),
				new theloai	('Corgi ngu','img/cheems.jpg','corgi','500','dog','58966335447'),
				new theloai	('Corgi','img/corgi.jpg','corgi','500','dog','54285463868'),
				new theloai	('Corgi','img/corgi.jpg','corgi','500','dog','6888553'),
				new theloai	('Mèo tam thể','img/meotamthe.jpg','mtt','500','cat','58965241543'),
				new theloai	('Mèo tam thể','img/meotamthe.jpg','mtt','500','cat','5896524212122'),
				new theloai	('Mèo tam thể','img/meotamthe.jpg','mtt','500','cat','589665241452'),
				new theloai	('Mèo tam thể','img/meotamthe.jpg','mtt','500','cat','58966554244512'),
				new theloai	('Mèo tam thể','img/meotamthe.jpg','mtt','500','cat','58964552648712'),
				new theloai	('Mèo tam thể','img/meotamthe.jpg','mtt','500','cat','58965458241452'),
				new theloai	('Mèo tam thể','img/meotamthe.jpg','mtt','500','cat','589645572414522'),
				new theloai	('Mèo tam thể','img/meotamthe.jpg','mtt','500','cat','589645562417482'),
				new theloai	('Mèo tam thể','img/meotamthe.jpg','mtt','500','cat','58965254454512'),
				new theloai	('Mèo tam thể','img/meotamthe.jpg','mtt','500','cat','589652421782'),
				new theloai	('Shiba','img/shiba.jpg','sb','500','dog','456984561459'),
				new theloai	('Husky','img/husky.jpg','hk','500','dog','654560124546'),
				new theloai	('Cheems','img/cheems.jpg','cheems','500','dog','6501244564568'),
				new theloai	('Shiba','img/shiba.jpg','sb','500','dog','456598644587589'),
				new theloai	('Husky','img/husky.jpg','hk','500','dog','654536784546'),
				new theloai	('Cheems','img/cheems.jpg','cheems','500','dog','6541235445668'),
				new theloai	('Shiba','img/shiba.jpg','sb','500','dog','45652981235469'),
				new theloai	('Husky','img/husky.jpg','hk','500','dog','65485552123646'),
				new theloai	('Cheems','img/cheems.jpg','cheems','500','dog','65123454178845668'),
				new theloai	('Shiba','img/shiba.jpg','sb','500','dog','456986123459'),
				new theloai	('Husky','img/husky.jpg','hk','500','dog','65456364546786'),
				new theloai	('Cheems','img/cheems.jpg','cheems','500','dog','633548745668'),
				new theloai	('Mèo anh lông ngắn xám','img/meoanhlongngangray.jpg','ecate','500','cat','5678655336896'),
				new theloai	('Mèo anh lông ngắn vàng','img/meoanhlongnganyellow.jpg','ecate','500','cat','637854362589'),
				new theloai	('Mèo tam thể','img/meotamthe.jpg','mtt','500','cat','5896552412'),
				new theloai	('Mèo anh lông ngắn xám','img/meoanhlongngangray.jpg','ecate','500','cat','566355638596'),
				new theloai	('Mèo anh lông ngắn vàng','img/meoanhlongnganyellow.jpg','ecate','500','cat','65465235839'),
				new theloai	('Mèo tam thể','img/meotamthe.jpg','mtt','500','cat','589652412'),
				new theloai	('Mèo anh lông ngắn xám','img/meoanhlongngangray.jpg','ecate','500','cat','566353556896'),
				new theloai	('Mèo anh lông ngắn vàng','img/meoanhlongnganyellow.jpg','ecate','500','cat','653462589'),
				new theloai	('Mèo tam thể','img/meotamthe.jpg','mtt','500','cat','589633352412'),
			];
			localStorage.setItem('product',JSON.stringify(arrtheloai));
	}
}
var arrgiohang=[];
