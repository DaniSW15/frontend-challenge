import { Component, OnInit } from '@angular/core';
import { RepoService } from './services.service';
import { SearchRepo } from './model/repositories';
import { FormBuilder, FormGroup } from '@angular/forms';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-buscar-nombre',
  templateUrl: './buscar-nombre.component.html',
  styleUrls: ['./buscar-nombre.component.css']
})
export class BuscarNombreComponent implements OnInit {

  public repos: SearchRepo[] = [] || undefined;
  public from!: FormGroup;

  constructor(private api: RepoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.from = this.fb.group({
      nombre: ['']
    });
  }

  async buscarRepos(): Promise<void> {
    const nombre = this.from.get('nombre')?.value;

    if (nombre) {
      try {
        const repos: any = await lastValueFrom(this.api.getRepos(nombre));

        if (repos && repos.items) {
          this.repos = repos.items;
        }

      } catch (error) {
        this.repos = [];
      }
    } else {
      this.repos = [];
    }
  }

}
