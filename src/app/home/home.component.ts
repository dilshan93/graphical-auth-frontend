import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImageMapCoordinate} from "../image-map/image-map.component";
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit{

  @ViewChild('myCanvas', {static: false}) public myCanvas: ElementRef;
  private context: CanvasRenderingContext2D;
  columns = 2;
  rows    = 2;


  constructor() { }

  ngAfterViewInit(): void {

    const canvasEl: HTMLCanvasElement = this.myCanvas.nativeElement;
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    let background = new Image();
    background.src = "assets/images/test.jpg";
    //this.context.lineWidth = 3;
    //this.context.lineCap = 'round';
   // this.context.strokeStyle = '#000';
    background.onload = () =>{
      this.context.drawImage(background,0,0,200,200);
      this.draw();
    }

    this.captureEvents(canvasEl)


  }


  private getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    // let tileWidth  = Math.round(canvas.width / this.columns);
    //   let tileHeight = Math.round(canvas.height / this.rows);
    let tileWidth  = Math.round((event.offsetX/7) * 2 - 1);
    let tileHeight = Math.round((event.offsetY/7) * 2 - 1);
    console.log("Coordinate x: " + tileWidth,
      "Coordinate y: " + tileHeight);
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {

    fromEvent(canvasEl, 'mousedown').subscribe((res:[MouseEvent, MouseEvent]) =>{

      this.getMousePosition(canvasEl, res);
    });
  }

  draw() {
    if (this.context ) {

      for(var x=0.5;x<200;x+=30) {
        this.context.moveTo(x,0);
        this.context.lineTo(x,200);
      }

      for(var y=0.5; y<200; y+=30) {
        this.context.moveTo(0,y);
        this.context.lineTo(200,y);

      }

      this.context.strokeStyle='black';
      this.context.stroke();
    }
  }



}
