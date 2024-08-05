import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Package {
  name: string;
  description: string;
}

interface Destination {
  name: string;
  description: string;
}

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  packages: Package[] = [];
  destinations: Destination[] = [];
  showPackageDialog = false;
  showDestinationDialog = false;
  newPackage: Package = { name: '', description: '' };
  newDestination: Destination = { name: '', description: '' };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPackages();
    this.getDestinations();
  }

  getPackages(): void {
    this.http.get<Package[]>('assets/packages.json').subscribe(data => {
      this.packages = data;
    });
  }

  getDestinations(): void {
    this.http.get<Destination[]>('assets/destinations.json').subscribe(data => {
      this.destinations = data;
    });
  }

  openPackageDialog(): void {
    this.showPackageDialog = true;
  }

  openDestinationDialog(): void {
    this.showDestinationDialog = true;
  }

  closeDialog(): void {
    this.showPackageDialog = false;
    this.showDestinationDialog = false;
  }

  savePackage(): void {
    this.packages.push({ ...this.newPackage });
    this.newPackage = { name: '', description: '' };
    this.closeDialog();
  }

  saveDestination(): void {
    this.destinations.push({ ...this.newDestination });
    this.newDestination = { name: '', description: '' };
    this.closeDialog();
  }
}
