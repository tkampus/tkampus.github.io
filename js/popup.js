const popup = {
   // atribut
   parent : document.getElementById('kotak1'),
   // method display
   setpopup(message, callback) {
      let war = '';
      if(message.id==1){war = 'Warning!!'}
      else if(message.id==2){war = 'Hati Hati!!'}
      else if(message.id==3){war = 'Pemberitahuan'}
      const confirmBox = document.createElement('div');
      confirmBox.classList.add('peringatan-box');
      confirmBox.innerHTML = `
         <div class="kotak text-center" id="peringatan">
            <img src="assets/popup/warning${message.id}.svg" alt="peringatan" class="pop-icon">
            <h1>${war}</h1>
            <div id="confirm-mess">${message.pesan}</div>
            <div class="pop-btn">
               <button class="${(message.id==1?'btn-red':'btn-blue')} btn-ok">YA</button>
               ${(message.id==1)?'<button class="btn-blue btn-cancel">TIDAK</button>':''}
            </div>
         </div>
      `; 
      document.body.appendChild(confirmBox);
      const btnOk = confirmBox.querySelector('.btn-ok');
      btnOk.addEventListener('click', function() {
         callback(true);
         document.body.removeChild(confirmBox);
      });

      if(message.id==1){
         const btnCancel = confirmBox.querySelector('.btn-cancel');
         btnCancel.addEventListener('click', function() {
            callback(false);
            document.body.removeChild(confirmBox);
         });
      }
   },
   // method event
   alert1(pes){
      this.setpopup(
         {
            id : 2,
            pesan : pes
         }, 
         (result)=>{
            return 0;
         }
      );
   },
   alert2(pes){
      this.setpopup(
         {
            id : 3,
            pesan : pes
         }, 
         (result)=>{
            return 0;
         }
      );
   },
   confirm(pes, callback){
      this.setpopup(
         {
            id : 1,
            pesan : pes
         }, 
         (result)=>{
            callback(result)
         }
      );
   }
}