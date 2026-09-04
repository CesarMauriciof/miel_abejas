import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-proceso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
  host: {
    '[style.display]': "'block'"
  },
  animations: [
    trigger('processAnimation', [
      transition(':enter', [
        query('.timeline-item', [
          style({ opacity: 0, transform: 'translateY(40px)' }),
          stagger(180, [
            animate('0.7s cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProcessComponent {
  
  pasosProceso = [
    {
      fase: '01',
      titulo: 'El Hábitat Silvestre',
      subtitulo: 'Bosque Nativo y Colmenas Adaptadas',
      descripcion: 'Nuestras abejas reales habitan en una zona de bosque silvestre con arbustos bajos, organizadas en cajones de madera donde construyen panales grandes y jugosos. Por su parte, las abejas angelitas —delicadas y sin aguijón— viven dispersas por la finca en cajones y tubos de guadua, respetando su entorno natural.',
      imagenUrl: 'assets/Imagenes/habitat.jpg',
      icono: '🌲'
    },
    {
      fase: '02',
      titulo: 'Alimentación Natural',
      subtitulo: 'Sabor con Notas a Flor de Café',
      descripcion: 'A las abejas no se les alimenta artificialmente en ningún momento; su producto es totalmente silvestre. Ellas recolectan libremente el néctar de la floración del entorno, siendo la flor de nuestros propios cafetales su principal fuente de energía. Esto le aporta a la miel un perfil de sabor único y auténtico.',
      imagenUrl: 'assets/Imagenes/floracion.jpg',
      icono: '☕'
    },
    {
      fase: '03',
      titulo: 'La Espera (Cosecha Anual)',
      subtitulo: 'El Verano de Agosto',
      descripcion: 'La paciencia es nuestra mayor aliada. Ambas variedades se cosechan únicamente durante la temporada seca de verano, principalmente en el mes de agosto. Al realizarse prácticamente una sola vez al año, aseguramos una miel madura, concentrada y con propiedades óptimas.',
      imagenUrl: 'assets/Imagenes/verano.jpg',
      icono: '☀️'
    },
    {
      fase: '04',
      titulo: 'Extracción Artesanal',
      subtitulo: 'Cuidado y Cosecha a Mano',
      descripcion: 'Llegado el momento, las colmenas se destapan para recolectar los panales manualmente. Con las abejas angelitas el cuidado es extremo debido a su fragilidad. Los panales se trasladan a casa donde la miel se extrae cuidadosamente, se sierne para garantizar su pureza y se limpia de cualquier residuo natural sin alterar sus propiedades.',
      imagenUrl: 'assets/Imagenes/extraccion.jpg',
      icono: '🍯'
    },
    {
      fase: '05',
      titulo: 'Embotellado Consciente',
      subtitulo: 'Economía Circular en Vidrio',
      descripcion: 'El ciclo finaliza con un compromiso ecológico. La miel pura limpia se almacena meticulosamente en botellas de vidrio de aguardiente y ron, cuidadosamente recolectadas y esterilizadas. Así transformamos residuos en empaques artesanales que protegen la calidad de la miel y reducen el impacto ambiental.',
      imagenUrl: 'assets/Imagenes/miel-real.jpg',
      icono: '♻️'
    }
  ];
}