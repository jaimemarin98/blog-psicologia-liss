import { RouterModule, Routes } from '@angular/router';
import { Section1AnalysisComponent } from './components/section1-analysis/section1-analysis.component';
import { Section2AdolescenceComponent } from './components/section2-adolescence/section2-adolescence.component';
import { Section3AdulthoodComponent } from './components/section3-adulthood/section3-adulthood.component';
import { Section4AcademicJournalComponent } from './components/section4-academic-journal/section4-academic-journal.component';
import { Section5FinalReflectionsComponent } from './components/section5-final-reflections/section5-final-reflections.component';



export const routes: Routes = [
  { path: '', redirectTo: '/section1', pathMatch: 'full' },
  { path: 'section1', component: Section1AnalysisComponent },
  { path: 'section2', component: Section2AdolescenceComponent },
  { path: 'section3', component: Section3AdulthoodComponent },
  { path: 'section4', component: Section4AcademicJournalComponent },
  { path: 'section5', component: Section5FinalReflectionsComponent },
  // Redirige cualquier otra ruta a blog/section1
  { path: '**', redirectTo: '/section1' }
];

