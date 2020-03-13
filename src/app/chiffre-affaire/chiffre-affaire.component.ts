import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { CommandeService } from '../services/commande.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-chiffre-affaire',
  templateUrl: './chiffre-affaire.component.html',
  styleUrls: ['./chiffre-affaire.component.scss']
})
export class ChiffreAffaireComponent implements OnInit {
  
  @ViewChild("chart",null) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  commandes : Array<any> = new Array();

  constructor(private commandeService:CommandeService) { }

  ngOnInit() {
    this.loadChart();
  }

  async loadChart(){

    this.commandes = await this.commandeService.getCommandes();

    let dateData = new Array();
    let data = new Array();
    let dn = new Date();

    let min = 30;

    for(var i = 0; i < 60; i++){
      let m : number = dn.getMinutes() - min;
      let h = dn.getHours();
      if(m < 0){
        m = 60 + m;
        h -= 1;
      }
      if(m>60){
        m = m - 60;
        h += 1;
      }
      let date = h+":"+m;
      dateData.push(date);
      data.push(0);
      min--;
    }

    this.commandes.forEach(function(commande){
      let dateD = new Date(commande.date);
      let date = dateD.getHours()+":"+dateD.getMinutes();
      console.log(date);
      
      if(dateData.includes(date)){
        var total = 0;
        commande.produits.forEach(function(produit){
            total = (total*10 + produit.prix*10)/10;
        });
       data[dateData.indexOf(date)] += total;
      }
    });

    this.chartOptions = {
      series: [
        {
          name: "€",
          data: data
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Chiffre d'affaire par minute sur une heure",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: dateData
      }
    };
  }

}
