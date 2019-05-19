import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(private _productService: ProductService) { }
  albumInfo;

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => {
      console.log(response);
      this.albumInfo = response;

    });
  }

}
