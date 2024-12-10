import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section1-analysis',
  imports: [CommonModule],
  templateUrl: './section1-analysis.component.html',
  styleUrls: ['./section1-analysis.component.css']
})
export class Section1AnalysisComponent implements OnInit {
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
