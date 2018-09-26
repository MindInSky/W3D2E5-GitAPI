class GitHub {
  constructor() {
    this.client_id = "2d444c053db9c70038be";
    this.client_secret = "bd34ea66308475d63be3cae948d206d1e7bd5fb5";

    //propierties to filter for repos
    this.repos_count = 5;
    this.repos_sort = "created:asc";
  }

  async getUser(user) {
    let urlProfile = `https://api.github.com/users/${user}?client_id=${
      this.client_id
    }&client_secret=${this.client_secret}
      }
    }`;

    let urlRepos = `https://api.guthub.com/users/${user}/repos?per_page${
      this.repos_count
    }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
      this.client_secret
    }`;

    const profileResponse = await fetch(urlProfile);

    const repoResponse = await fetch(urlRepos);
    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return { profile, repos };
  }
}
