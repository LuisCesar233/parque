import { ModalController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slides: any;
  @ViewChild('sliders') sliders: HTMLIonSlidesElement;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {

  }
  dismiss(){
    this.modalCtrl.dismiss();
  }

  slid(){
    this.slides = [
      {
        title: 'Welcome to the Docs!',
        description: 'The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.',
        image: 'assets/img/1017650.jpg',
      },
      {
        title: 'What is Ionic?',
        description: '<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.',
        image: 'assets/img/1582281965.JPG',
      },
      {
        title: 'What is Ionic Cloud?',
        description: 'The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.',
        image: 'assets/img/ari.jpg',
      }
    ];

  }
  // click sgt slides
  next() {
    this.sliders.slideNext();
  }
}
