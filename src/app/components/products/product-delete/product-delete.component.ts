import { Route, Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',

  templateUrl: './product-delete.component.html',
})
export class ProductDeleteComponent implements OnInit {

  product: Product; 


  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.delete(id).subscribe(product => {
      
      var answer = window.confirm();

      this.product = product 
      this.productService.showMessage('Produto Apagado') 
      this.router.navigate(['/products/'])
     })
  }

  cancel(): void {
    this.router.navigate(['/products/'])
  }

}
