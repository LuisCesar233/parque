import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
import { AnimalService } from './../../services/animal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  anima: any;
  barcodeScannerOption: BarcodeScannerOptions;

  constructor(
    private animalService: AnimalService,
    private modalCtrl: ModalController,
    private barcodeScanner: BarcodeScanner,
    public router: Router
  ) { }

  ngOnInit() {
  }
  dismiss(){
    this.modalCtrl.dismiss();
  }

  createQr() {
    this.barcodeScanner
    .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.createdCode)
    .then(
        createCode => {
          console.log(createCode);
          this.createdCode = createCode;
        },
        err => {
          console.log('Error Here', err);
        }
      );
  }
  scanQr() {
    console.log('"click() method called"');
    this.barcodeScanner.scan()
      .then((result) => {
        this.router.navigateByUrl('list-animal/' + result.text);
        // this.navCtrl.navigateForward('../list-animal/' + animal);
        console.log(result.text);
        this.dismiss();
      })
      .catch((error) => {
        console.log('Error is here', error);
      });
  }
}
