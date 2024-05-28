import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = ''; // Inicialización por defecto
  nivelSeleccionado: any; // Propiedad para almacenar el nivel educativo seleccionado
  nivelesEducacionales = [ // Lista de niveles educativos
    { id: 1, nombre: 'Educación Basica' },
    { id: 2, nombre: 'Educación Media' },
    { id: 3, nombre: 'Educación técnica o profesional' },
    { id: 4, nombre: 'Educación universitaria (pregrado)' },
    { id: 5, nombre: 'Postgrado (maestría, doctorado, etc.)' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Manejar el valor de estado posible nulo o indefinido
    this.route.queryParams.subscribe(() => {
      const navigation = this.router.getCurrentNavigation();
      this.username = navigation?.extras?.state?.['username'] ?? 'Usuario'; // Valor por defecto "Usuario"
    });
  }

  onClear() {
    const form = document.forms.namedItem("homeForm") as HTMLFormElement;
    if (form) {
      form.reset();
      const inputs = form.getElementsByTagName('ion-input');
      Array.from(inputs).forEach(input => {
        const inputElement = input.shadowRoot?.querySelector('input') as HTMLElement;
        if (inputElement) {
          inputElement.style.transition = 'transform 1s';
          inputElement.style.transform = 'translateX(100px)';
        }
      });
    }
  }

  onShow() {
    const form = document.forms.namedItem("homeForm") as HTMLFormElement;
    if (form) {
      const firstName = (form['firstName'] as HTMLInputElement).value;
      const lastName = (form['lastName'] as HTMLInputElement).value;
      alert(`Nombre: ${firstName} \nApellido: ${lastName}`);
    }
  }
}
