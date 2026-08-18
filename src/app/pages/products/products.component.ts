import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  // Cambia este número por el WhatsApp real de Alexander (código de país + número sin espacios)
  whatsappNumber: string = '573008534033'; 

  productos = [
    {
      nombre: 'Miel de Abejas Reales Silvestre',
      subtitulo: 'Orgánica y Artesanal',
      presentacion: 'Presentación: Botellas de vidrio recicladas (Contribuyendo al medio ambiente).',
      descripcion: 'Miel 100% pura extraída de bosques silvestres. Un producto robusto, con notas florales intensas y madurado de forma natural.',
      imagen: 'assets/Imagenes/miel-real.jpg', // Asegúrate de meter una buena foto en tu carpeta assets
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