import { ModalController } from '@ionic/angular';
import { AnimalService } from './../../services/animal.service';
import { Component, OnInit } from '@angular/core';
import { DetailPage } from '../detail/detail.page';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  animales: any;
  search: any;

  constructor(
    private animalService: AnimalService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.listar();
  }
  listar() {
    this.animales = this.animalService.getAnimal();
  }

  searchChange() {
    this.listar();
    if (!this.search.trim().length) { return; }
    this.animales = this.animales.filter( result => {
      // tslint:disable-next-line: max-line-length
      return (result.nombre.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || result.tipo.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    });
  }

  mapClick(id) {
    console.log(id);
  }
  async showD(id) {
    console.log(id);
    const modal = await this.modalCtrl.create({
      component: DetailPage,
      componentProps: {
        id
      }
    });
    (await modal).present();
  }
}
