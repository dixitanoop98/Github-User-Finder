class Github{
    constructor(){
        this.client_id='de60466509d2904afff2';
        this.client_secret=' 533bf86fb39c6a9dc8ece76bb47a52ff66687a2c';
        this.repo_count=4;
        this.repo_sort='created : asc';
    }
    async getUser(user){
        const profileResponse=await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse=await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile=await profileResponse.json();
        const repos=await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}