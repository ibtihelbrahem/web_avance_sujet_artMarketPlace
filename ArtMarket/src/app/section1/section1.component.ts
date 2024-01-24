
import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef,HostListener } from '@angular/core';
@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component {
  @ViewChild('galleryContainer') galleryContainer!: ElementRef;
  @ViewChild('galleryCont') galleryCont!: ElementRef;
  @ViewChild('galleryContcos') galleryContcos!: ElementRef;
  images = [
    { src: '../../assets/images/art14.jpg', description: "Modern girl's oil portrait Women face with Microcosmos", price: "150$" },
    { src: '../../assets/images/art12.jpg', description: 'Powerful Women as Goddesses of the Sea',price: "100$" },
    { src: '../../assets/images/art6.jpg', description: 'The Feeling Of Ballet Dance Arcylic Painting',price: "350$" },
    { src: '../../assets/images/nature.jpg', description: "The Power of Nature's Beauty",price: "400$" },
   
  ];
  images2 = [
    { src: '../../assets/images/art9.jpg', description: 'Then Endless Trip Abstract Art',price: "559$" },
    { src: '../../assets/images/art7.png', description: 'Warm Basket',price: "50$" },
    { src: '../../assets/images/art8.jpg', description: 'J Resistance',price: "70$" },
    { src: '../../assets/images/art11.jpg', description: 'The Fall of the Moon',price: "199$" }
  ];
  images3 = [
    { src: '../../assets/images/ward.jpg', description: "Beautiful red head woman portrait", price: "150$" },
    { src: '../../assets/images/portrait.jpg', description: 'Powerful Women as Goddesses of the Sea',price: "100$" },
    { src: '../../assets/images/plage.jpg', description: 'Beauty within the waves',price: "350$" },
    { src: '../../assets/images/ballet.jpg', description: "Ballet Dance",price: "400$" },
   
  ];
  images4 = [
    { src: '../../assets/images/arbres.jpg', description: 'Colorful Trees in Japan',price: "559$" },
    { src: '../../assets/images/moon.jpg', description: 'Optical Illusion Photography Sees Man Play Basketball With Moon',price: "50$" },
    { src: '../../assets/images/animal.jpg', description: 'Into The Wildlands Of Finland',price: "70$" },
    { src: '../../assets/images/univers.jpg', description: 'Galactic Coast',price: "199$" }

  ];
  images5 = [
    { src: '../../assets/images/raven.jpg', description: "Stunning Raven blue cosplay from Fiore Sofen", price: "150$" },
    { src: '../../assets/images/itachi.jpg', description: 'Powerful Women as Goddesses of the Sea',price: "100$" },
    { src: '../../assets/images/spyx.jpg', description: 'Spy X Family Yor Forger Cosplay Outfit costume',price: "350$" },
    { src: '../../assets/images/kakashi.jpg', description: "Kakashi Cosplay Shirt",price: "200$" },
   
  ];
  images6 = [
    { src: '../../assets/images/ahri.jpg', description: 'Game League of Legends Ice Ahri Cosplay Costume',price: "559$" },
    { src: '../../assets/images/katarina.jpg', description: 'Game League of Legends Katarina Cosplay Costume',price: "50$" },
    { src: '../../assets/images/black.jpg', description: 'Isabelle lightwood from TMI ',price: "70$" },
    { src: '../../assets/images/blanc.jpg', description: 'Nuoqi Violet Evergarden Cosplay Costume',price: "199$" }

  ];


  scrollLef(): void {
    this.galleryCont.nativeElement.style.scrollBehavior = 'smooth';
    this.galleryCont.nativeElement.scrollLeft -= 900;
  }

  scrollRigh(): void {
    this.galleryCont.nativeElement.style.scrollBehavior = 'smooth';
    this.galleryCont.nativeElement.scrollLeft += 900;
  }
  scrollLefCosplay(): void {
    this.galleryContcos.nativeElement.style.scrollBehavior = 'smooth';
    this.galleryContcos.nativeElement.scrollLeft -= 900;
  }

  scrollRighCosplay(): void {
    this.galleryContcos.nativeElement.style.scrollBehavior = 'smooth';
    this.galleryContcos.nativeElement.scrollLeft += 900;
  }
  scrollLeft(): void {
    this.galleryContainer.nativeElement.style.scrollBehavior = 'smooth';
    this.galleryContainer.nativeElement.scrollLeft -= 900;
  }

  scrollRight(): void {
    this.galleryContainer.nativeElement.style.scrollBehavior = 'smooth';
    this.galleryContainer.nativeElement.scrollLeft += 900;
  }
}
