// property
const sett_menu = document.getElementById('sett-menu');
const sett_body = document.getElementById('sett-body');
let menuset = [...sett_menu.children];
let menubody = [...sett_body.children];
const sett_tmbh_kat = document.getElementById('sett-tambah-kategori');


// method consruktor
for (let i = 0; i < menuset.length; i++) {
   menuset[i].children[0].addEventListener('click', () => {
      menuset.map(e => e.classList.remove('active'));
      menuset[i].classList.add('active');
      menubody.map(e => e.classList.remove('sett-body-active'));
      menubody[i].classList.add('sett-body-active');
   })
}

