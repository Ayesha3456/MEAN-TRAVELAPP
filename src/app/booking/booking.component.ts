import { Component } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  constructor(private bookingService: BookingService) {}

  onSubmit() {
    const bookingData = {
      destination: 'Sample Destination',
      date: new Date()
    };

    this.bookingService.book(bookingData).subscribe(response => {
      console.log('Booking confirmed', response);
    });
  }
}
