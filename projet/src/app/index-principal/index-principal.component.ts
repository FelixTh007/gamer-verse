import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-principal',
  templateUrl: './index-principal.component.html',
  styleUrl: './index-principal.component.css'
})
export class IndexPrincipalComponent implements OnInit{
    public toLogin : boolean = false;

    ngOnInit(): void {
    }
    public onClick()
    {
      this.toLogin = !this.toLogin;
    }
    public test()
    {
      alert("mety");
    }
}