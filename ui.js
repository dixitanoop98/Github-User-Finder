class UI{
    constructor(){
        this.profile=document.querySelector('#profile');
    }
    showProfile(user){
        this.profile.innerHTML=`
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
          
           
            <span class="btn btn-primary btn-block">Public Repos: ${user.public_repos}</span>
            <span class="btn btn-secondary btn-block">Public Gists: ${user.public_gists}</span>
            <span class="btn btn-success btn-block">Followers: ${user.followers}</span>
            <span class="btn btn-info btn-block">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      let
      <div id="repos"></div>
    `;
    }
    //show repos
    showRepos(repos){
      let output='';
      repos.forEach(function(repo){
        output+=`
        <div class="card card-body mb-2">
    <div class="row"> 
        <div class="col md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </div>
        <div class="col md-6">
            <span class="btn btn-primary">Stars:${repo.stargazers_count}</span>
            <span class="btn btn-secondary">Watchers:${repo.watchers_count}</span>
            <span class="btn btn-success">Forks:${repo.forks_count}</span>
        </div>
    </div> 

</div>
        `
      })
      document.querySelector('#repos').innerHTML=output;
    }
    //show alert
    showAlert(message,className){
      //clear alert if already
      this.clearAlert();
      //create  div class
      const div=document.createElement('div');
      //add class
      div.className=className;
      //add text
      div.appendChild(document.createTextNode(message));
      //get parent
      const container=document.querySelector('.searchContainer');
      //add search box;
      const search=document.querySelector('.search');
      //insert alert
      container.insertBefore(div,search);
      setTimeout(()=>{
        this.clearAlert();
      },3000)

    }

    clearAlert(){
      const currentAlert=document.querySelector('.alert');
      if(currentAlert)
      {
        currentAlert.remove();
      }
    }
    clearProfile(){
      this.profile.innerHTML='';
    }
}