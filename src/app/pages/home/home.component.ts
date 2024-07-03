import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { ButtonComponent } from "../../components/button/button.component";
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ MatProgressSpinnerModule,MenuComponent, ButtonComponent,MatIconModule,CommonModule]
})
export class HomeComponent {
  userName:string|null;

  ngOnInit(){
  this.userName= sessionStorage.getItem('user');
  }
}
