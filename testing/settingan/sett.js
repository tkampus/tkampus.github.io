const sett = {
   openSettings() {
   document.getElementById("settingssett").style.display = "block";
   },

   closeSettings() {
   document.getElementById("settingssett").style.display = "none";
   }
}

const sett_btn = document.getElementById('sett-btn');
sett_btn.addEventListener('click', ()=>{sett.openSettings()})

const sett_menu = document.getElementById('sett-menu');
let menu =  [...sett_menu.children];
for (let i = 0; i < menu.length; i++) {
   menu[i].addEventListener('click', ()=>{
      menu.map(e => e.classList.remove('active'));
      menu[i].classList.add('active');
   })
}

