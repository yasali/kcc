import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  public images = [];
  slideIndex = 0;
  constructor() { }
  ngOnInit() {
    this.images = [
      {'url': 'https://picsum.photos/seed/1/800/600'}, 
      {'url': 'https://picsum.photos/seed/2/600/800'},
      {'url': 'https://picsum.photos/seed/3/800/800'}, 
      {'url': 'https://picsum.photos/seed/4/800/600'}, 
      {'url': 'https://picsum.photos/seed/5/600/800'}
    ];
  }
  
  openModal() {
    document.getElementById('imgModal').style.display = "block";
  }

  closeModal() {
    document.getElementById('imgModal').style.display = "none";
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(slideIndex);
  showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("img-slides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("images")as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";
    if (dots && dots.length > 0) {
      dots[this.slideIndex-1].className += " active";
    }
  }

}
