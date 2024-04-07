import { Injectable } from '@angular/core';
import { Octokit } from '@octokit/rest';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly token = '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';

  constructor() { }

  async getToken(username: string, reponame: string) {
    const octokit = new Octokit({
      auth: this.token
    });

    try {
      const response: any = await octokit.search.issuesAndPullRequests({
        q: `repo:${username}/${reponame}`
      });

      if (response.status === 200 && response.data.items.length > 0) {
        return response.data.items;
      } else if (response.status === 422) {
        return [];
      }
    } catch (error: any) {
      reponame = '';
      username = '';
      return [];
    }

    return [];
  }

}
