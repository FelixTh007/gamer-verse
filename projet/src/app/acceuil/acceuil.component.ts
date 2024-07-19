import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent implements OnInit{
  public publication : boolean = false;
  public message :  boolean = false;
  public options : boolean = false;
  

  ngOnInit() : void{
    this.message = !this.message;
  }
  
  
}
