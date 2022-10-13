import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../interfaces/product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss'],
})
export class ProductReadComponent implements OnInit {
  public products: IProduct[] = [];
  public displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService, private router: Router) {}

  public ngOnInit(): void {
    this.productService.readProducts().subscribe((products) => {
      this.products = products;
    });
  }

  public deleteProduct(productId: string): void {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.productService.showMessage('Produto Deletado!');
    });

    this.router.navigate(['/products']);
  }
}
