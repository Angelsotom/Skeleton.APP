import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginData = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  onLogin() {
    // Validar los datos de inicio de sesión aquí
    if (this.loginData.username.length >= 3 && this.loginData.username.length <= 8 &&
        /^[0-9]{4}$/.test(this.loginData.password)) {
      // Redirigir a la página de inicio con los datos del usuario
      this.router.navigate(['/home'], {
        state: { username: this.loginData.username }
      });
    } else {
      alert('Por favor, ingrese un usuario válido y una contraseña de 4 dígitos.');
    }
  }
}

