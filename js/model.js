class todo {
	constructor(a, b, c, d, e, f) {
		this.id = a;
		this.title = b;
		this.matkul = c;
		this.detail = d;
		this.date = e;
		this.status = f;
	}
}
class matkul {
	constructor(a, b, c, d, e) {
		this.idmatkul = a;
		this.matkul = b;
		this.jdl_j = c; // waktu jam
		this.jdl_h = d; // waktu hari
		this.detail = e;
	}
}