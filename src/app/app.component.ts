import { Component } from '@angular/core';
import {MarkerService} from '../serivces/marker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkerService]
})
export class AppComponent {
  //zoom level
  zoom: number = 10;
  title = 'app';
  //start position
  lat: number = 42.868164;
  lng: number = -70.889071;

  // Values
  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;

  markers: marker[];

  constructor(private  mService: MarkerService) {
    this.markers = this.mService.getMarkers();
    console.log(this.markers);
  }

  mapClicked(e: any) {
    let newMarker = {
      name: 'Untitled',
      lat: e.coords.lat,
      lng: e.coords.lng,
      draggable: false
    };
    this.markers.push(newMarker);
    console.log(this.markers);

  }
  clickedMarker(marker: marker, i: number) {
    console.log(marker.name);
  }
  markerDragEnd(m: any, e: any) {
    let updMarker={
      name: m.name,
      lat: parseFloat(m.lat),
      lng: parseFloat(m.lng),
      draggale: false
    };
    let newLat = e.coords.lat;
    let newLng = e.coords.lng;
    this.mService.updateMarker(updMarker, newLat, newLng);
  }

  addMarker(){
    let isDraggable;
    if (this.markerDraggable === 'yes') {
       isDraggable = true;
    }else {
       isDraggable = false;
    }
    const newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    };
    this.markers.push(newMarker);
    this.mService.addMarker(newMarker);
  }
  removeMarker(m){
    for (let i = 0; i < this.markers.length; i++) {
      if ((this.markers[i].lat == m.lat) && (this.markers[i].lng == m.lng) && (this.markers[i].name == m.name)){
         this.markers.splice(i, 1 );
        }
    }
    this.mService.removeMarker(m);

  }

}

interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
