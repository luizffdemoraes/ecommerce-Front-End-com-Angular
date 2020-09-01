import { Component } from '@angular/core';

// Direciona atravez da tag app-root no index e redireciona para app.component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
}
