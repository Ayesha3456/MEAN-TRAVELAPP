import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../destinations.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  destinations: any[] = [];
  // Define a property for the modal content if needed
  modalContent: any;

  constructor(
    private destinationsService: DestinationsService
  ) { }

  ngOnInit(): void {
    this.loadDestinations();
  }

  loadDestinations(): void {
    this.destinationsService.getDestinations().subscribe(
      data => this.destinations = data,
      error => console.error('Error fetching destinations', error)
    );
  }

  openModal(content: any): void {
    // Implement modal functionality or remove this method
    this.modalContent = content; // This is a placeholder
  }

  addDestination(newDestination: any): void {
    this.destinationsService.addDestination(newDestination).subscribe(
      () => this.loadDestinations(),
      error => console.error('Error adding destination', error)
    );
  }
}
