import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'] // Asegúrate de que use .scss
})
export class ContactComponent {
  // Datos maestros de Alexander
  whatsappNumber: string = '573008534033';
  telefonoFijo: string = '+57 300 853 4033'; // Si tiene fijo pones otro, sino el mismo formateado
  correoElectronico: string = 'mielcaffeto@gmail.com'; // Cambiar por el real
  facebookUrl: string = 'https://www.facebook.com/alexander.daza.mielcaffeto'; // Cambiar por la real
  ubicacion: string = 'El Tambo, Cauca, Colombia';

  // Mensaje por defecto para el botón general de WhatsApp
  mensajePredeterminado: string = '¡Hola Mielcaffeto! Me gustaría ponerme en contacto con ustedes para obtener más información.';

  get linkWhatsapp(): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.mensajePredeterminado)}`;
  }

  get linkCorreo(): string {
    return `mailto:${this.correoElectronico}?subject=Contacto%20Desde%20Web%20Mielcaffeto`;
  }
}