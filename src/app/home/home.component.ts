import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";
import {RegisterService} from "../register/register.service";
import {UserRegisterDataService} from "../shard_services/user-register-data.service";
import {AuthenticationService} from "../shard_services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {

  @ViewChild('myCanvas', {static: false}) public myCanvas: ElementRef;
  private context: CanvasRenderingContext2D;
  private dataList: string[] = [];
  private dataObj: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private registerService: UserRegisterDataService, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.registerService.getRegisteredData().subscribe(value => {
      this.dataObj = value;
    });
  }

  ngAfterViewInit(): void {

    const canvasEl: HTMLCanvasElement = this.myCanvas.nativeElement;
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    let background = new Image();
    background.src = "assets/images/test.jpg";
    background.onload = () => {
      this.context.drawImage(background, 0, 0, 500, 500);
      this.draw();
      this.captureEvents(canvasEl);
    }


  }


  private getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    // let tileWidth  = Math.round(canvas.width / this.columns);
    //   let tileHeight = Math.round(canvas.height / this.rows) ;
    let tileWidth =Math.round(Math.round(x) / 10) * 10 ;
    let tileHeight = Math.round(Math.round(y) / 10) * 10 ;
    this.dataList.push(tileWidth + "," + tileHeight);

    console.log("Coordinate x: " + tileWidth,
      "Coordinate y: " + tileHeight);
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {

    // @ts-ignore
    fromEvent(canvasEl, 'mousedown').subscribe((res: [MouseEvent, MouseEvent]) => {

      this.getMousePosition(canvasEl, res);
    });
  }

  draw() {
    if (this.context) {

      for (var x = 0.5; x < 500; x += 30) {
        this.context.moveTo(x, 0);
        this.context.lineTo(x, 500);
      }

      for (var y = 0.5; y < 500; y += 30) {
        this.context.moveTo(0, y);
        this.context.lineTo(500, y);

      }

      this.context.strokeStyle = 'black';
      this.context.stroke();
    }
  }


  submitUser() {
    let pass = '';
    if (this.dataList.length != 0) {
      if (this.dataList.length >= 6) {

        this.dataList.forEach(function(i, idx, array) {
          if (idx === array.length - 1) {
            pass += i;
          } else {
            pass += i + ",";
          }
        });
        this.dataList.length = 0;
      } else {
        alert("Minimam 6 points should be selected");
        this.dataList.length = 0;
        return;
      }
      this.dataObj.passWord = pass;
      console.log(this.dataObj);
      this.authenticationService.registerUser(this.dataObj).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.dataObj = null;
        },
        err => {
          this.errorMessage = 'err.error.message';
          this.isSignUpFailed = true;
        }
      );
      pass = null;
    } else {
      alert("Please create your password");

    }
  }
}
