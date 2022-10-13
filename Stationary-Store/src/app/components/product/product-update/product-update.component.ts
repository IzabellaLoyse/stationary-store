import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../interfaces/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
  public product: IProduct = {} as IProduct;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.readProductById(id).subscribe((product) => {
      this.product = product;
    });
  }

  public updateProduct() {
    this.productService.updateProduct(this.product).subscribe(() => {
      this.productService.showMessage('Produto Atualizado!');
      this.router.navigate(['/products']);
    });
  }

  public onCancel() {
    this.router.navigate(['/products']);
  }
}
