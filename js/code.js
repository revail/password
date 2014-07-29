alert("hi");
var DB; // Base de dados

function show(){
	document.getElementById("intro").style.display = "none";
	initDB();
	
}

function initDB(){
	// Web storage initial
	if(!window.openDatabase){ // Verificação se é nativo com HTML5 WebStorage
		document.getElementById("menu").innerHTML+= = "Atentção";
		document.getElementById("status").style.display = "block";
		document.getElementById("intro").style.display = "none";
		return;
	}else{
		document.getElementById("menu").style.display = "block";
		var name = "Quotations";
		var version = "1.0";
		var displayName = "Quotations";
		var maxSize = 3*1024*1024 // 3MB
		db = window.openDatabase(name,version,displayName,maxSize);
	}
}