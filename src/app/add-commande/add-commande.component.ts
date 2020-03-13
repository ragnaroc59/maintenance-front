import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { ProduitService } from 'src/app/services/produit.service';
import { MagasinService } from 'src/app/services/magasin.service';
import { UserService } from 'src/app/services/user.service';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.scss']
})
export class AddCommandeComponent implements OnInit {


  commandes: Array<any> = new Array();
  magasins: Array<any> = new Array();
  produits: Array<any> = new Array();
  users: Array<any> = new Array();


  produitsToSave = new Array();
  user: any = {};
  magasin: any = {};
  qte: any = {};

  constructor(private userService: UserService, private magasinService: MagasinService, private produitService: ProduitService, private commandeService: CommandeService) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {

    this.magasins = await this.magasinService.getMagasins();
    this.produits = await this.produitService.getProduits();
    this.users = await this.userService.getUsers();

    console.log(this.users);

    let prixTotal = 0;

    this.commandes = await this.commandeService.getCommandes();
  }


  passerCommande() {
    let commande = { produits: this.produitsToSave, user: this.user, magasin: this.magasin };
    console.log(commande);
  }

  choisirUser(user) {
    this.user = user;
  }

  choisirMagasin(magasin) {
    this.magasin = magasin;
  }

  ajouterProduit(produit) {
    this.produitsToSave.push(produit);
  }
}
