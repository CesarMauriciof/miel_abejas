import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('.producto-card', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(150, [
            animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProductsComponent {
  whatsappNumber: string = '573008534033'; 

  productos = [
    {
      nombre: 'Miel de Abejas Reales Silvestre',
      subtitulo: 'Orgánica y Artesanal',
      presentacion: 'Presentación: Botellas de vidrio recicladas (Contribuyendo al medio ambiente).',
      descripcion: 'Miel 100% pura extraída de bosques silvestres. Un producto robusto, con notas florales intensas y madurado de forma natural.',
      imagen: 'assets/Imagenes/miel-real.jpg',
      mensajeWs: 'Hola! Me interesa conocer más sobre la Miel de Abejas Reales Silvestre.'
    },
    {
      nombre: 'Miel de Abejas Angelitas',
      subtitulo: 'Medicina Natural (Sin Aguijón)',
      presentacion: 'Presentación: Dosificación por Onzas.',
      descripcion: 'Una miel sumamente exclusiva y escasa, producida por abejas nativas sin aguijón. Tradicionalmente valorada por sus propiedades medicinales y su sabor sutilmente ácido.',
      imagen: 'assets/Imagenes/miel-angelita.jpg',
      mensajeWs: 'Hola! Quisiera más información sobre la exclusiva Miel de Abejas Angelitas.'
    }
  ];

  generarLinkWhatsapp(mensaje: string): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
  }
}