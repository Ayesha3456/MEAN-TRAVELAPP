import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DestinationsService } from '../destinations.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  destinations: any[] = [];

  constructor(
    private destinationsService: DestinationsService,
    private modalService: NgbModal
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
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  addDestination(newDestination: any): void {
    this.destinationsService.addDestination(newDestination).subscribe(
      () => this.loadDestinations(),
      error => console.error('Error adding destination', error)
    );
  }
}
