const kotaks = {
   // 1.warning(merah, confrim), 2.hatihati(kuning), 3.permberitahuan(hijau) 
   confirmAction(message, callback) {
      if(message.id==2){const war = 'Warning!!'}
      else if(message.id==1){const war = 'Awas!!'}
      else if(message.id==0){const war = 'Pemberitahuan'}
      const confirmBox = document.createElement('div');
      confirmBox.classList.add('peringatan-box');
      console.log(message.id);
      confirmBox.innerHTML = `
         <div class="kotak text-center" id="peringatan">
            <img src="../warning${message.id}.svg" alt="peringatan" class="pop-icon">
            <h1>Warning!!</h1>
            <div id="confirm-mess">${message.pesan}</div>
            <div class="pop-btn">
               <button class="${(message.id==2?'btn-red':'btn-blue')} btn-ok">YA</button>
               ${(message.id==2)?'<button class="btn-blue btn-cancel">TIDAK</button>':''}
            </div>
         </div>
      `; 
      document.body.appendChild(confirmBox);
      const btnOk = confirmBox.querySelector('.btn-ok');
      btnOk.addEventListener('click', function() {
         callback(true);
         document.body.removeChild(confirmBox);
      });

      if(message.id==2){
         const btnCancel = confirmBox.querySelector('.btn-cancel');
         btnCancel.addEventListener('click', function() {
            callback(false);
            document.body.removeChild(confirmBox);
         });
      }
   }

}

// cara menjalankan
const peringatan_tbn = document.getElementById('peringatan-btn');
peringatan_tbn.addEventListener('click', ()=>{
   kotaks.confirmAction(
      {
         id : 1,
         pesan : 'Apakah Anda yakin ingin melanjutkan?'
      }, 
      (result)=>{
         if(result){
            console.log('oke')
         }else{
            console.log('cancel')
         }
      }
   );
})
