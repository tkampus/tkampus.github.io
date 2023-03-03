// datatask
const datatask = {
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