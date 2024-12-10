import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section3-adulthood',
  imports: [CommonModule],
  templateUrl: './section3-adulthood.component.html',
  styleUrl: './section3-adulthood.component.css'
})
export class Section3AdulthoodComponent {
  isModalOpen: boolean = false;

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.getSectionData('section1');
  }

  // Función para abrir el modal
  openModal(event: Event): void {
    event.preventDefault(); 
    this.isModalOpen = true;

    // Opcional: Reproducir el video automáticamente al abrir el modal
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.play();
    }
  }

  // Función para cerrar el modal
  closeModal() {
    this.isModalOpen = false;
    // Detener el video al cerrar el modal
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.pause();
      this.videoPlayer.nativeElement.currentTime = 0; // Reinicia el video
    }
  }
}
