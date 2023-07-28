import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
 @Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent {
  @Input() product!: Product;
  constructor( 
    public activeModal: NgbActiveModal,
   ) {
  }
  closeModal(){
    this.activeModal.dismiss();

  }
}
