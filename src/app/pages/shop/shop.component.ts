import { Component, Input, OnInit } from '@angular/core';
import { PartService } from '../../shared/services/part.service';
import { Part } from '../../shared/models/Part';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  brands: any[] = [];
  types: any[] = [];
  selectedBrand: any;
  selectedType: any;

  parts: Part[] = [];
  constructor(private carPart: PartService) {}

  ngOnInit(): void {
    this.carPart.getBrands().subscribe((brand) => {
      let xd: any = [];
      brand.forEach((e) => {
        xd.push(e.brand);
      });
      this.brands = Array.from(new Set(xd));
    });
  }

  onBrandChange(brand: string) {
    this.selectedBrand = brand;
    this.carPart.getTypesByBrand(brand).subscribe((type) => {
      let xd: any = [];
      type.forEach((e) => {
        xd.push(e.brand_type);
      });
      this.types = Array.from(new Set(xd));
    });
    this.selectedType = null;
  }

  onTypeChange(type: string) {
    console.log(`Tipus kiválasztva: ${type}`);
    this.selectedType = type;
  }

  loadParts() {
    this.parts = [];

    this.carPart
      .getParts(this.selectedBrand, this.selectedType)
      .subscribe((part) => {
        this.parts = part;
      });
  }
}
