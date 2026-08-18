import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de que esté si usas Standalone
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations'; 

@Component({
  selector: 'app-home-abejas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-abejas.component.html',
  styleUrls: ['./home-abejas.component.scss'],
  animations: [
    // 1. Animación para el texto home
    trigger('entradaTexto', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }), // Empieza fuera a la izquierda
        animate('0.8s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    
    // 2. Animación para la imagen home
    trigger('entradaImagen', [
      transition(':enter', [
        // Empieza invisible y 50px a la DERECHA (positivo)
        style({ opacity: 0, transform: 'translateX(50px)' }), 
        // Llega a su posición con un suavizado suave
        animate('1s 0.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })) 
      ])
    ])
  ]
})
export class HomeAbejasComponent {}