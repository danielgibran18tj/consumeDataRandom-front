import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  producto: any;

  constructor(private productoService: ProductService) { }

  ngOnInit(): void {
    // Aquí puedes probar con un ID fijo
    this.getProducto(1);  // Cambiará luego con selección dinámica
  }

  getProducto(id: number): void {
    this.productoService.getProducto(id).subscribe(data => {
      this.producto = data;
    });
  }
}
