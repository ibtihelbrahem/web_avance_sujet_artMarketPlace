import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interface',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.css'
})
export class InterfaceComponent {
  imageUrl: string = '../../assets/images/art1.png';
}
