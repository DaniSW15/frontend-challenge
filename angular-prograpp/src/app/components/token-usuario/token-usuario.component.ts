import { Component, OnInit } from '@angular/core';
import { TokenService } from './token.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenRepo } from './model/repositories';


@Component({
  selector: 'app-token-usuario',
  templateUrl: './token-usuario.component.html',
  styleUrls: ['./token-usuario.component.css']
})
export class TokenUsuarioComponent implements OnInit {

  public from!: FormGroup;
  public repos: TokenRepo[] = [];
  public error: string = '';

  constructor(private api: TokenService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.from = this.fb.group({
      username: [''],
      reponame: ['']
    });
  }

  async buscarRepos(): Promise<void> {

    const username = this.from.get('username')?.value;
    const reponame = this.from.get('reponame')?.value;

    if (username && reponame) {
      try {
        const token: any = await this.api.getToken(username, reponame);

        if (token.length === 0) {
          this.error = 'No se encontraron resultados para la busqueda';
          this.repos = [];
        } else {
          this.repos = token;
          this.error = '';
        }

      } catch (error) {
        this.error = 'Hubo un error al realizar la  busqueda';
        this.repos = [];
      }
    } else {
      this.repos = [];
    }

  }
}
