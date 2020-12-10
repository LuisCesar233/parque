import { AnimalService } from './../../services/animal.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  animal: any;
  pet: any;
  constructor(
    private modalCtrl: ModalController,
    private activaterouter: ActivatedRoute,
    private animalService: AnimalService,
    public navParam: NavParams
  ) { }

  ngOnInit() {
    this.pet = 'detalle';
    this.activaterouter.paramMap.subscribe(paramtMap => {
      // const recipeId = paramtMap.get('id');
      const recipeId = this.navParam.get('id');
      this.animal = this.animalService.getAnimalId(recipeId);
      console.log(this.animal);
    });
  }
  async dismiss() {
    this.modalCtrl.dismiss({animal: this.animal});
  }

}
