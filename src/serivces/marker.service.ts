import {Injectable} from '@angular/core';
import {Init} from '../app/init-markers';

@Injectable()
export class MarkerService extends Init{
  constructor(){
    super();
    this.load();
  }
  getMarkers(){
    const markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }
  addMarker(newMarker){
    let markers = JSON.parse(localStorage.getItem('markers'));
    markers.push(newMarker);
    localStorage.setItem('markers', JSON.stringify(markers));
  }
  updateMarker(updMarker, newLat, newLng){
    let markers = JSON.parse(localStorage.getItem('markers'));
    markers.map( res => {
     if (res.name === updMarker.name) {
       res.lat = newLat;
       res.lng = newLng;
     }
    });
    localStorage.setItem('markers', JSON.stringify(markers));
  }
  removeMarker(m) {
    let markers = JSON.parse(localStorage.getItem('markers'));
    for (let i = 0; i < markers.length; i++) {
      if ((markers[i].lat == m.lat) && (markers[i].lng == m.lng) && (markers[i].name == m.name)){
        markers.splice(i, 1 );
      }
    }
    localStorage.setItem('markers', JSON.stringify(markers));
  }

}
