import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InterfaceComponent } from '../interface/interface.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { Section1Component } from '../section1/section1.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, InterfaceComponent, NavbarComponent, Section1Component,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
