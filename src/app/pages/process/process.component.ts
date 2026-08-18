import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proceso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {
  
  pasosProceso = [
    {
      fase: '01',
      titulo: 'El Hábitat Silvestre',
      subtitulo: 'Bosque Nativo y Colmenas Adaptadas',
      descripcion: 'Nuestras abejas reales habitan en una zona de bosque silvestre con arbustos bajos, organizadas en cajones de madera donde construyen panales grandes y jugosos. Por su parte, las abejas angelitas —delicadas y sin aguijón— viven dispersas por la finca en cajones y tubos de guadua, respetando su entorno natural.',
      imagenUrl: 'assets/proceso/habitat.jpg', // Espacio para foto de los cajones/guaduas
      icono: '🌲'
    },
    {
      fase: '02',
      titulo: 'Alimentación Natural',
      subtitulo: 'Sabor con Notas a Flor de Café',
      descripcion: 'A las abejas no se les alimenta artificialmente en ningún momento; su producto es totalmente silvestre. Ellas recolectan libremente el néctar de la floración del entorno, siendo la flor de nuestros propios cafetales su principal fuente de energía. Esto le aporta a la miel un perfil de sabor único y auténtico.',
      imagenUrl: 'assets/proceso/floracion.jpg', // Espacio para foto de las abejas en la flor de café
      icono: '☕'
    },
    {
      fase: '03',
      titulo: 'La Espera (Cosecha Anual)',
      subtitulo: 'El Verano de Agosto',
      descripcion: 'La paciencia es nuestra mayor aliada. Ambas variedades se cosechan únicamente durante la temporada seca de verano, principalmente en el mes de agosto. Al realizarse prácticamente una sola vez al año, aseguramos una miel madura, concentrada y con propiedades óptimas.',
      imagenUrl: 'assets/proceso/verano.jpg', // Espacio para foto del paisaje seco o colmenas al sol
      icono: '☀️'
    },
    {
      fase: '04',
      titulo: 'Extracción Artesanal',
      subtitulo: 'Cuidado y Cosecha a Mano',
      descripcion: 'Llegado el momento, las colmenas se destapan para recolectar los panales manualmente. Con las abejas angelitas el cuidado es extremo debido a su fragilidad. Los panales se trasladan a casa donde la miel se extrae cuidadosamente, se sierne para garantizar su pureza y se limpia de cualquier residuo natural sin alterar sus propiedades.',
      imagenUrl: 'assets/proceso/extraccion.jpg', // Espacio para foto del sierte/panal extraído
      icono: '🍯'
    },
    {
      fase: '05',
      titulo: 'Embotellado Consciente',
      subtitulo: 'Economía Circular en Vidrio',
      descripcion: 'El ciclo finaliza con un compromiso ecológico. La miel pura limpia se almacena meticulosamente en botellas de vidrio de aguardiente y ron, cuidadosamente recolectadas y esterilizadas. Así transformamos residuos en empaques artesanales que protegen la calidad de la miel y reducen el impacto ambiental.',
      imagenUrl: 'assets/proceso/embotellado.jpg', // Espacio para foto de las botellas de licor llenas de miel
      icono: '♻️'
    }
  ];
}