import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// 1. Importamos las herramientas de Firestore
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  // 2. Inyectamos Firestore (la conexión que configuramos en app.config)
  private firestore = inject(Firestore);
  private fb = inject(FormBuilder);

  registroForm: FormGroup;

  constructor() {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      whatsapp: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      terminos: [false, Validators.requiredTrue]
    });
  }

  // 3. Convertimos la función a 'async' porque la base de datos tarda un momento en responder
  async enviarDatos() {
    if (this.registroForm.valid) {
      try {
        // 1. Guardar en Firebase (Tu base de datos de respaldo)
        const clientesRef = collection(this.firestore, 'leads_mielcaffeto');
        await addDoc(clientesRef, {
          ...this.registroForm.value,
          fecha: new Date(),
          estado: 'nuevo'
        });

        // 2. Enviar a Make vía Webhook (Para el Excel y notificaciones)
        // Usamos fetch porque es nativo y no requiere configurar HttpClient
        fetch('https://hook.us2.make.com/u4ya3rg12s51p4d3nytld8uyrwl52a9t', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.registroForm.value)
        })
        .then(() => console.log('Datos enviados a Make correctamente'))
        .catch(err => console.error('Error al avisar a Make:', err));

        // Feedback al usuario
        alert('¡Registro exitoso! Pronto recibirás tu descuento en WhatsApp.');
        this.registroForm.reset();

      } catch (error) {
        console.error('Error en el proceso:', error);
        alert('Hubo un error al procesar tu solicitud.');
      }
    } else {
      alert('Por favor, rellena todos los campos correctamente.');
    }
  }
}