import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Section1AnalysisComponent } from './components/section1-analysis/section1-analysis.component';
import { Section2AdolescenceComponent } from './components/section2-adolescence/section2-adolescence.component';
import { Section3AdulthoodComponent } from './components/section3-adulthood/section3-adulthood.component';
import { Section4AcademicJournalComponent } from './components/section4-academic-journal/section4-academic-journal.component';
import { Section5FinalReflectionsComponent } from './components/section5-final-reflections/section5-final-reflections.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    Section1AnalysisComponent,
    Section2AdolescenceComponent,
    Section3AdulthoodComponent,
    Section4AcademicJournalComponent,
    Section5FinalReflectionsComponent,
    NavbarComponent,
    FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'blog';
   // Lista de reproducción con las rutas de las canciones
  playlist: string[] = [
    'assets/music/BeautifulThings.mp3',
    'assets/music/ShapeofYou.mp3',
    'assets/music/TuAmante.mp3',
    'assets/music/Perfect.mp3',
    'assets/music/NiTengoNiNecesito.mp3',
    'assets/music/ERESBACHATA.mp3',
    'assets/music/DanzaKuduro.mp3',
    'assets/music/DaddyYankeeLimbo.mp3',
    'assets/music/Animals.mp3',
    'assets/music/YoTeEsperare.mp3',
    'assets/music/Andasenmicabeza.mp3',
    'assets/music/Gasolina.mp3',

  ];

  playlistNames: string[] = [
    'Beatiful Things',  // Nombre de la canción 2
    'Shape of You',  // Nombre de la canción 3
    'Tu Amante - Yeison Jimenes',  // Nombre de la canción 3
    'Perfetc',  // Nombre de la canción 3
    'Ni Tengo Ni Necesito',  // Nombre de la canción 3
    'Eres - Bachata',  // Nombre de la canción 3
    'Danza Kuduro',  // Nombre de la canción 3
    'Limbo - Daddy Yankee',  // Nombre de la canción 3
    'Animals',  // Nombre de la canción 3
    'Yo te Esperare',  // Nombre de la canción 3
    'Andas en mi Cabeza',  // Nombre de la canción 3
    'Gasolina',  // Nombre de la canción 3
  ];

  selectedSongIndex: number = 0; // Índice de la canción seleccionada
  audio!: HTMLAudioElement; // Reproductor de audio
  isPlaying: boolean = true; // Estado de la música (reproduciendo o pausada)

  constructor() {
    // Comprobamos si estamos en el navegador antes de usar el objeto Audio
    if (typeof window !== 'undefined') {
      this.audio = new Audio(this.playlist[this.selectedSongIndex]);
      this.audio.volume = 0.2; // Volumen suave
      this.audio.loop = false;  // Eliminar el bucle
      this.audio.play().catch(err => console.error('Error al reproducir música:', err));

      // Evento para cambiar a la siguiente canción cuando la actual termine
      this.audio.onended = () => this.playNextSong();
    }
  }

  ngOnInit(): void {
    // Reproducir música al cargar la página
    this.playMusic();
  }

  // Función para reproducir la canción seleccionada
  playMusic(): void {
    if (this.audio) {
      this.audio.src = this.playlist[this.selectedSongIndex];
      this.audio.play().catch(err => console.error('Error al reproducir música:', err));
      this.isPlaying = true;  // La música está en reproducción
    }
  }

  // Función para cambiar la canción de la lista
  changeSong(index: number): void {
    this.selectedSongIndex = index;
    this.playMusic(); // Cambiar a la canción seleccionada y reproducir
  }

  // Función para pausar o reanudar la música
  togglePlayPause(): void {
    if (this.isPlaying) {
      this.audio.pause();  // Pausar la música
    } else {
      this.audio.play().catch(err => console.error('Error al reanudar música:', err));  // Reanudar la música
    }
    this.isPlaying = !this.isPlaying;  // Cambiar el estado de reproducción
  }

  // Función para reproducir la siguiente canción
  playNextSong(): void {
    // Incrementar el índice de la canción
    this.selectedSongIndex = (this.selectedSongIndex + 1) % this.playlist.length; // Si llega al final, vuelve al principio
    this.playMusic(); // Reproducir la siguiente canción
  }
}
