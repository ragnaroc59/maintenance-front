import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-list-commandes',
  templateUrl: './list-commandes.component.html',
  styleUrls: ['./list-commandes.component.scss']
})
export class ListCommandesComponent implements OnInit {

  commandes: Array<any> = new Array();

  constructor(private commandeService :CommandeService) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData(){
    console.log("begin");

    this.commandes = await this.commandeService.getCommandes();
    console.log(this.commandes);
    console.log("ok");
  }

}
