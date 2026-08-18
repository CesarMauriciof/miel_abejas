import { Routes } from '@angular/router';
import { HomeAbejasComponent } from './pages/home-abejas/home-abejas.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProcessComponent } from './pages/process/process.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
  { path: '', component: HomeAbejasComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'proceso', component: ProcessComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: '' }
];