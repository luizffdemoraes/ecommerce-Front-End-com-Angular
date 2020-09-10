import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-content',
  templateUrl: './shop-content.component.html',
  styleUrls: ['./shop-content.component.css']
})
export class ShopContentComponent implements OnInit {

  constructor() { }
  qtdeProdutos: number = 200;
  ngOnInit(): void {
  }
  getQtdeProdutos(): number {
    return this.qtdeProdutos;
  }

}
