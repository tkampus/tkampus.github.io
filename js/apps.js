apps.getDatatask();
apps.getDatamatkul();
apps.setListMatkul();
apps.refresDisplay(apps.basedata);

// element
const formdata = document.getElementById('forminputdata');
const formcari = document.getElementById('formpencarian');
const sett_btn = document.getElementById('dis-setting');

// event
formdata.addEventListener('submit', (event) => {
	apps.inputdata(formdata);
	apps.getDatatask();
});
formcari.cari.addEventListener('keyup', (event) => {
	let datas = apps.caritodo(formcari.cari.value);
	apps.refresDisplay(datas);
});
sett_btn.addEventListener('click', () => {
	sett.setdisplay()
})