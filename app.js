const github=new Github;
const ui=new UI;

const searchUser=document.querySelector('#searchUser');

searchUser.addEventListener('keyup',(e)=>{
   const userText=e.target.value;
   if(userText!=='')
   {
       github.getUser(userText)
       .then((data)=>{
           if(data.profile.message==='Not Found'){
               //alert
               ui.showAlert('User Not found','alert alert-danger');
           }
           else{
               //ui
             //  ui.clearAlert();
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
           }
       })
   }
   else{
       //clear profile
       ui.clearProfile();
   }
});