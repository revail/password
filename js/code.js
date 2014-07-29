var DB; // Base de dados

function show(){
	document.getElementById("intro").style.display = "none";
	initDB();
	
}

function initDB(){
	// Web storage initial
	if(!window.openDatabase){ // Verificação se é nativo com HTML5 WebStorage
		document.getElementById("status").innerHTML+= "Atentção";
		document.getElementById("status").style.display = "block";
		document.getElementById("intro").style.display = "none";
		return;
	}else{
		document.getElementById("menu").style.display = "block";
		var name = "Quotations";
		var version = "1.0";
		var displayName = "Quotations";
		var maxSize = 3*1024*1024; // 3MB
		db = window.openDatabase(name,version,displayName,maxSize);

		initTables();
		initValues();
	}
}

function initTables(){
	db.transaction(function(tx){
		tx.executeSql('CREATE TABLE IF NOT EXISTS BookAuthors (author_id INT NOT NULL, isbn TEXT NOT NULL , PRIMARY KEY (author_id,isbn));');
	});
	db.transaction(function(tx){
		tx.executeSql('CREATe TABLE If not exists Authors (id int primary key, name text);');
	});
	db.transaction(function(tx){
		tx.executeSql('CREATe TABLE If not exists Books (isbn primary key, title text, price real);');
	});
	db.transaction(function(tx){
		tx.executeSql('CREATe TABLE If not exists Quotations (nom int primary key, isbn text, page int, quotation text);');
	});
}

function initValues(){
	db.transaction(function(tx){
		tx.executeSql("INSERT INTO Authors (id,name) VALUES (5,'Uolter');");
	});
	db.transaction(function(tx){
		tx.executeSql("INSERT INTO Books (isbn,title,price) VALUES ('4654654','Teste title','546');");
	});
	db.transaction(function(tx){
		tx.executeSql("INSERT INTO BookAuthors (author_id,isbn) values (5,'4654654');");
	});
	db.transaction(function(tx){
		tx.executeSql("INSERT INTO Quotations (nom,isbn,page,quotation) values (1,'4654654','45','vvvvvvvvvvv');");
	});
}

function showQuatations(){
	document.getElementById("menu").style.display = "none";
	document.getElementById("quotations").style.display = "block";
	document.getElementById("quotations").innerHTML = "";

	db.transaction(function(tx){
		tx.executeSql("select * from Authors ",[],function(tx,result){
			var len = result.rows.length; // tamanho do array
			var name;
			for (var i = 0;i<len;i++){
				name = result.rows.item(i).name;
				alert(name);
			}
		},null);
	});
}

function adicionarOutroAutor(){
	db.transaction(function(tx){
		tx.executeSql("INSERT INTO Authors (id,name) VALUES (2,'Uolter2');");
	});
}

// CREATe TABLE If not exists Authors (id int primary key, name text);
// INSERT INTO Authors (id,name) VALUES (5,'Test');
// 6.57 parte 4