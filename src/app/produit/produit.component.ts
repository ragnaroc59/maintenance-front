import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  constructor() { }

  quantites: Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  quantite : any = {};
  @Input()
  produit;

  @Output()
  produitsToSave = new EventEmitter();

  ngOnInit() {
  }

  ajouterProduit(produit, quantite) {
    produit.quantite = quantite;
    this.produitsToSave.emit(produit);
  }

}
