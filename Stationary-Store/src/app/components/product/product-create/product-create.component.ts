import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../interfaces/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  public product: IProduct = {} as IProduct;

  constructor(private productService: ProductService, private router: Router) {}

  public ngOnInit(): void {}

  public createProduct(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado!');
      this.router.navigate(['/products']);
    });
  }

  public onCancel(): void {
    this.router.navigate(['/products']);
  }
}
