import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from '../Users';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {
  venues : any;
  newArray : any;
  isClicked: boolean = false;
  star : string;
  constructor(private objUser: UserserviceService,private http : HttpClient) { }

ngOnInit(): void {
  this.http.get<any>('http://localhost:4000/response').subscribe(
    (response) => {
      console.log('Raw Response:', response);

      if (response && response.venues && Array.isArray(response.venues)) {
        this.venues = response.venues;
        this.newArray = this.venues.map((venue) => {
        return {
          id: venue.id,
          city: venue.location.city,
          state: venue.location.state,
          country: venue.location.country
        };
      });
      console.log(this.newArray);
      } else {
        console.error('Error: Response does not contain the expected structure', response);
      }
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
  );
}
}