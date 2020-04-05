import { Component, OnInit } from '@angular/core';
import { VenueserviceService } from '../venueservice.service';
import { Venue } from '../venue';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit {

  venues: Venue [];
  constructor(private venueService: VenueserviceService) { }

  ngOnInit() {
    this.getVenue();
    console.log(this.venues);
  }
   
  getVenue(): void{
    this.venueService.getVenues()
                      .subscribe(venue => this.venues = venue);
  }
}
