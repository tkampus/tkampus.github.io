class todo{
	constructor(a, b, c, d, e, f){
		this.id = a;
		this.title = b;
		this.matkul = c;
		this.detail = d;
		this.date = e;
		this.status = f;
	}
}
class matkul{
	constructor(a, b){
		this.idmatkul = a;
		this.matkul = b;
	}
}

// database
const database = {
	storage_Key : 'daftartodo',
	getdata(){
		const data = localStorage.getItem(this.storage_Key);
		if (data !== null) {
			return JSON.parse(data);
		} else {
			return []
		}
	},
	setdata(a){
		localStorage.setItem(this.storage_Key, JSON.stringify(a))
	}
}

const datamatkul = {
	storage_Key : 'daftarmatkul',
	getdata(){
		const data = localStorage.getItem(this.storage_Key);
		if (data !== null) {
			return JSON.parse(data);
		} else {
			return []
		}
	},
	setdata(a){
		localStorage.setItem(this.storage_Key, JSON.stringify(a))
	}
}

//  apps
const setts = {
	// property
	matakul:[],
	// mrthod database
	getDatamatkul(){
		this.matakul = datamatkul.getdata();
	},
	setDatamatkul(){
		datamatkul.setdata(this.matakul);
	},
	// method display
	setListMatkul(){
		const mk = document.getElementById('matkul');
		let option = '<option value="Umum">Umum - Tugas diluar kuliah</option>';
		this.matakul.forEach(e => {
			option+= `<option value="${e.matkul}">${e.idmatkul} - ${e.matkul}</option>`
		});
		mk.innerHTML = option;
	}

}
const apps = {
	// property
	basedata:[],
	// method database
	getDatabase(){
		this.basedata = database.getdata();
	},
	setDatabase(){
		database.setdata(this.basedata);
	},
	// method display
	getInputan(){
		const a = +new Date();
		const b = document.getElementById('title').value;
		const c = document.getElementById('matkul').value;
		const d = document.getElementById('detail').value;
		const e = document.getElementById('date').value;
		const f = document.getElementById('complet').checked;
		return new todo(a, b, c, d, e, f);
	},
	setElement(e, i, s){
		let kotak = document.createElement('div');
		let check = s?'':`<button class="${e.status?'undo-button':'check-button'}" onclick="apps.gantiStatus(${i});"></button>`;
		kotak.innerHTML =`<div class="item" id="${e.id}">
									<div class="inner">
										<h3>${e.title}</h3>
										<p>Matkul : ${e.matkul} </p>
										<p>Deat Ln : ${e.date}</p>
									</div>`+check+
									`<button class="trash-button" onclick="apps.hapusTodo(${i});"></button>
								</div>`;
		return kotak;
	},
	refresDisplay(datas){
		const todo1 = document.getElementById('todo1');todo1.innerHTML ='';
		const todo2 = document.getElementById('todo2');todo2.innerHTML ='';
		const todo3 = document.getElementById('todo3');todo3.innerHTML ='';
		datas.forEach((element, i) => {
			if(new Date(element.date) < new Date()){
				todo3.append(this.setElement(element, i, true))
			}else if(element.status){
				todo2.append(this.setElement(element, i, false))
			}else{
				todo1.append(this.setElement(element, i, false))
			}
		});
	},
	// method event
	inputdata(){
		let todo = this.getInputan();
		this.basedata.unshift(todo);
		this.setDatabase();
	},
	gantiStatus(i){
		this.basedata[i].status = !(this.basedata[i].status);
		this.setDatabase();
		this.refresDisplay(this.basedata);
	},
	hapusTodo(i){
		alertPop();
		this.basedata.splice(i, 1);
		this.setDatabase();
		this.refresDisplay(this.basedata);
		console.log(i);
	},
	caritodo(cari){
		let hasil = [];
		this.basedata.forEach(e => {
			if (e.title.toLowerCase().indexOf(cari.toLowerCase())>=0) {
				hasil.unshift(e)
			} else if (e.matkul.toLowerCase().indexOf(cari.toLowerCase())>=0) {
				hasil.unshift(e)
			}else if (e.detail.toLowerCase().indexOf(cari.toLowerCase())>=0) {
				hasil.unshift(e)
			}else if (e.date.toLowerCase().indexOf(cari.toLowerCase())>=0) {
				hasil.unshift(e)
			}
		});
		return hasil;
	},
	settingDisplay(){
		alertPop();
	}
}
// construktor
apps.getDatabase();
setts.getDatamatkul();
setts.setListMatkul();
apps.refresDisplay(apps.basedata);
const formdata = document.getElementById('forminputdata');
const formcari = document.getElementById('formpencarian');

formdata.addEventListener('submit', (event) => {
	apps.inputdata();
	apps.getDatabase();
});
formcari.cari.addEventListener('keyup', (event) => {
	let datas = apps.caritodo(formcari.cari.value);
	apps.refresDisplay(datas);
});



