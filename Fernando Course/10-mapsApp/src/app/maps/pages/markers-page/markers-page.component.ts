import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor{
  color: string,
  marker: Marker
}

interface PlainMarker{
  color: string,
  lngLat: number[]
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];

  public zoom: number = 12;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.08, 4.67);

  ngAfterViewInit(): void {
    if( !this.divMap ) throw 'El elemento HTML no fue encontrado'

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    // //Se podría construir un elemento más complejo o dejar el que viene por defecto
    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Punto referencia'

    // const marker = new Marker({
    //   color: 'red',
    //   element: markerHtml
    // })
    //   .setLngLat( this.currentLngLat )
    //   .addTo( this.map );

    this.readFromLocalStorage();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  createMarker(): void{
    if( !this.map ) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat, color);
  }

  addMarker( lngLat: LngLat, color: string): void{
    if( !this.map ) return;

    const marker = new Marker({
      color: color,
      draggable:true
    })
    .setLngLat( lngLat )
    .addTo( this.map );

    marker.getElement().addEventListener('click', () => {
      this.flyTo(marker);
    });

    this.markers.push({ marker: marker, color: color });
    this.saveToLocalStorage();

    marker.on('dragend', () => {
      this.saveToLocalStorage();
    });
  }

  deleteMarker(index: number){
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  flyTo( marker: Marker){
    this.map?.flyTo({
      zoom: this.zoom + 2,
      center: marker.getLngLat()
    })
  }

  saveToLocalStorage(): void{
    const plainMarkers: PlainMarker[]= this.markers.map( ({color, marker}) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    });

    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  readFromLocalStorage(): void{
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse( plainMarkersString );

    plainMarkers.forEach( ({ color, lngLat }) => {
      const [lng, lat] = lngLat;
      const coords = new LngLat(lng, lat);

      this.addMarker( coords, color );
    });
  }
}
