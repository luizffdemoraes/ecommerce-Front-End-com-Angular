import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  permiteNewsLetter = false;
  textoNewsLetter = "Você pode receber os melhores descontos";
  email = "teste@teste.com.br";
  emailEnviado = false;

  constructor() {

  }

  ngOnInit() {
    setTimeout(() => {
      this.permiteNewsLetter = true;
    }, 5000);
  }

  onSubmitNewsLetter() {
    this.textoNewsLetter = "E-mail enviado";
    this.emailEnviado = true;
  }

  onEmailEnter(event: Event) {
    this.email = (<HTMLInputElement>event.target).value;
  }

  // getCor() {
  //   if (this.emailEnviado) {
  //     return 'green';
  //   } else {
  //     return 'yellow';
  //   }
  // }

}
