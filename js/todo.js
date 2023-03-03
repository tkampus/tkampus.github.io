const apps = {
	// property
	basedata: [],
	matakul: [],
	// mrthod datatask
	getDatamatkul() {
		this.matakul = datamatkul.getdata();
	},
	setDatamatkul() {
		datamatkul.setdata(this.matakul);
	},
	getDatatask() {
		this.basedata = datatask.getdata();
	},
	setDatatask() {
		datatask.setdata(this.basedata);
	},
	// method display
	getInputan(form) {
		const a = +new Date();
		const b = form.title.value;
		const c = form.matkul.value;
		const d = form.detail.value;
		const e = form.date.value;
		const f = form.complet.checked;
		return new todo(a, b, c, d, e, f);
	},
	setElement(e, i, s) {
		let kotak = document.createElement('div');
		let check = s ? '' : `<button class="${e.status ? 'undo-button' : 'check-button'}" onclick="apps.gantiStatus(${i});"></button>`;
		kotak.innerHTML = `<div class="item" id="${e.id}">
									<div class="inner">
										<h3>${e.title}</h3>
										<p>Matkul : ${e.matkul} </p>
										<p>Deat Ln : ${e.date}</p>
									</div>`+ check +
			`<button class="trash-button" onclick="apps.hapusTodo(${i});"></button>
								</div>`;
		return kotak;
	},
	refresDisplay(datas) {
		const todo1 = document.getElementById('todo1'); todo1.innerHTML = '';
		const todo2 = document.getElementById('todo2'); todo2.innerHTML = '';
		const todo3 = document.getElementById('todo3'); todo3.innerHTML = '';
		datas.forEach((element, i) => {
			if (new Date(element.date) < new Date()) {
				todo3.append(this.setElement(element, i, true))
			} else if (element.status) {
				todo2.append(this.setElement(element, i, false))
			} else {
				todo1.append(this.setElement(element, i, false))
			}
		});
	},
	setListMatkul() {
		const mk = document.getElementById('matkul');
		let option = '<option value="Umum">Umum - Tugas diluar kuliah</option>';
		this.matakul.forEach(e => {
			option += `<option value="${e.matkul}">${e.idmatkul} - ${e.matkul}</option>`
		});
		mk.innerHTML = option;
	},
	// method event
	inputdata(ele) {
		let todo = this.getInputan(ele);
		this.basedata.unshift(todo);
		this.setDatatask();
	},
	gantiStatus(i) {
		this.basedata[i].status = !(this.basedata[i].status);
		this.setDatatask();
		this.refresDisplay(this.basedata);
	},
	hapusTodo(i) {
		popup.confirm(`Menghapus tugas ${this.basedata[i].title}?`, (e) => {
			if (e) {
				this.basedata.splice(i, 1);
				this.setDatatask();
				this.refresDisplay(this.basedata);
				console.log(i);
			}
		})
	},
	caritodo(cari) {
		let hasil = [];
		this.basedata.forEach(e => {
			if (e.title.toLowerCase().indexOf(cari.toLowerCase()) >= 0) {
				hasil.unshift(e)
			} else if (e.matkul.toLowerCase().indexOf(cari.toLowerCase()) >= 0) {
				hasil.unshift(e)
			} else if (e.detail.toLowerCase().indexOf(cari.toLowerCase()) >= 0) {
				hasil.unshift(e)
			} else if (e.date.toLowerCase().indexOf(cari.toLowerCase()) >= 0) {
				hasil.unshift(e)
			}
		});
		return hasil;
	}
}