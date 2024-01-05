import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-matches',
  templateUrl: './saved-matches.component.html',
  styleUrls: ['./saved-matches.component.css']
})
export class SavedMatchesComponent implements OnInit {
  venues : any;
  newArray : any;
  isClicked: boolean = false;
  star : string;
  constructor(private http : HttpClient) { }

ngOnInit(): void {
  this.http.get<any>('http://localhost:4000/response').subscribe(
    (response) => {
      console.log('Raw Response:', response);

      if (response && response.venues && Array.isArray(response.venues)) {
        this.venues = response.venues;

        // If you need a separate newArray with just the IDs
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
