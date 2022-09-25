import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IProduct } from '../components/product/interfaces/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly URL = 'http://localhost:3000/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(message: string) {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  public createProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.URL, product);
  }

  public readProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.URL);
  }
}
