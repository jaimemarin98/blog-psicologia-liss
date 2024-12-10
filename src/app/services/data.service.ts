import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sectionData: { [key: string]: any } = {
    section1: { title: 'Análisis Teórico', content: '' },
    section2: { title: 'Acontecimientos Evolutivos en la Adolescencia', content: '' },
    section3: { title: 'Acontecimientos Evolutivos en la Adultez', content: '' },
    section4: { title: 'Bitácora de la Experiencia Académica', content: '' },
    section5: { title: 'Reflexiones Finales', content: '' },
    section6: { title: 'Bibliografía', content: '' },
  };

  getSectionData(section: string) {
    return this.sectionData[section];
  }

  updateSectionData(section: string, content: any) {
    this.sectionData[section] = content;
  }
}