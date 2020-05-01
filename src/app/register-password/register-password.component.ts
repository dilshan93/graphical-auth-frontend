import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserRegisterDataService} from "../shard_services/user-register-data.service";
import {AuthenticationService} from "../shard_services/authentication.service";
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-register-password',
  templateUrl: './register-password.component.html',
  styleUrls: ['./register-password.component.scss']
})
export class RegisterPasswordComponent implements OnInit {

  @ViewChild('myCanvas', {static: false}) public myCanvas: ElementRef;
  private context: CanvasRenderingContext2D;
  private dataList: string[] = [];
  private dataObj: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  fileData: File = null;
  previewUrl:any = null;
  // stringImage:string = null;
  // fileUploadProgress: string = null;
  // uploadedFilePath: string = null;
  staticImage:any = "assets/images/test.jpg";

  constructor(private registerService: UserRegisterDataService, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.registerService.getRegisteredData().subscribe(value => {
      this.dataObj = value;
      this.fileData = value.passImag;
      this.preview();
    });
  }

  // ngAfterViewInit(): void {
  //   // this.loadCanvas(this.staticImage);
  // }

  public loadCanvas(imageUrl:any){
    const canvasEl: HTMLCanvasElement = this.myCanvas.nativeElement;
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    let background = new Image();
    background.src = imageUrl;
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
    let tileWidth = Math.round(Math.round(x) / 10) * 10;
    let tileHeight = Math.round(Math.round(y) / 10) * 10;
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

        this.dataList.forEach(function (i, idx, array) {
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
      this.dataObj.passImag = this.previewUrl;
      console.log(this.dataObj);
      this.authenticationService.registerUser(this.dataObj).subscribe(
        data => {
         // this.stringImage = this.previewUrl;
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.dataObj = null;
        },
        err => {
          this.errorMessage = 'User Register Error';
          this.isSignUpFailed = true;
        }
      );
      pass = null;
    } else {
      alert("Please create your password");

    }
  }

  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
      this.loadCanvas(reader.result);
    }

    // const imsgeURL = "assets/images/DsuOreL.jpg";
    // this.loadCanvas(imsgeURL);

  }

  // fileProgress(fileInput: any) {
  //   this.fileData = <File>fileInput.target.files[0];
  //   this.preview();
  // }


}
