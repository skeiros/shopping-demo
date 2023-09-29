import { Component } from '@angular/core';
import { ShoppingService } from '../shopping.service';  
import { Product } from '../interfaces/product';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
   
  displayedColumns: string[] = ['id', 'title','category', 'price','action']; // Add more column names here
  dataSource: Product[] = [];
  categories:string[]=[];
  limits:number[]=[5,10,15,20];
  selectedCateogry:string="all";
  selectedLimit:number=10;
   constructor(private authService: AuthService,private shoppingService: ShoppingService,private router: Router,private modalService: NgbModal,) { }
  ngOnInit() {
   
    this.getCategories();
    this.getProducts();
   
  }
  getProducts(){
    this.shoppingService.getProducts(this.selectedLimit,this.selectedCateogry).subscribe(data => {
      this.dataSource = data;
    });
  }
  getCategories(){
    this.shoppingService.getCategories().subscribe(data=>{
      this.categories=data;
     })
  }
  onButtonClick(product:Product){
    const modalOptions: NgbModalOptions = {
      size: 'md', // Set the desired size: 'sm', 'md', 'lg', or 'xl'
      backdrop: 'static',
      centered: true,
      // Other options if needed
    };

    const modalRef = this.modalService.open(ProductModalComponent, modalOptions);
    modalRef.componentInstance.product = product; //*/
  }
  filterChange(){
    this.getProducts()
   }
   logout(){
    this.authService.logout();
    this.router.navigate(['/login']); 
   }
}
