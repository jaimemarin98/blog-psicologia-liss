import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private audio: HTMLAudioElement | null = null;
  private currentSongIndex: number = 0;
  private playlist: string[] = []; // Lista de canciones

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      // Lista de canciones en la carpeta assets/music
      this.playlist = [
        'assets/music/song1.mp3',
        'assets/music/song2.mp3',
        'assets/music/song3.mp3', // Añadir más canciones aquí
      ];

      // Reproducir la primera canción al iniciar
      this.audio = new Audio(this.playlist[this.currentSongIndex]);
      this.audio.loop = true;
      this.audio.volume = 0.1;
      this.audio.muted = false;
      this.playMusic();
    }
  }

  // Reproducir música
  playMusic(): void {
    if (this.audio) {
      this.audio.play().catch((error) => {
        console.error('Error al reproducir la música:', error);
      });
    }
  }

  // Pausar música
  pauseMusic(): void {
    if (this.audio) {
      this.audio.pause();
    }
  }

  // Cambiar canción
  changeSong(index: number): void {
    if (this.audio) {
      this.audio.pause(); // Pausar la canción actual
      this.audio = new Audio(this.playlist[index]);
      this.audio.loop = true;
      this.audio.volume = 0.1;
      this.audio.muted = false;
      this.playMusic();
      this.currentSongIndex = index;
    }
  }

  // Obtener lista de canciones
  getPlaylist(): string[] {
    return this.playlist;
  }
}
