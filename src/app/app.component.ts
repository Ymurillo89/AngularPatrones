import { Component, OnInit, signal } from '@angular/core';
import { PatronsService } from './serivece/patrons.service';
import { AlertService } from './serivece/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  dataImage:any="";
  imageLoad = signal<any>("");
  dataResponseImage= signal<any>([]);;
  constructor(private readonly patronService:PatronsService,
              private readonly alert:AlertService){

  }

  ngOnInit(): void {
    

  }  


  async handleFileInput(event: any) {
    const files = event.target.files;
  
    if (files && files.length > 0) {
      const file = files[0];
      const ext = file.name.split(".")[1];
      
      if (ext === "png" || ext === "jpeg" || ext === "jpg" || ext === "jpe") {
        const dataUrl = await this.readAsDataURL(file);
        this.imageLoad.set(dataUrl);        
      }else{
        this.alert.AlertWarning("Solo se pueden subir archivos con la extensión png,jpeg,jpe o jpg") 
      }
    }
  }
  
  async readAsDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        const dataUrl = reader.result as string;
        resolve(dataUrl);
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsDataURL(file);
    });
  }
  

  postimage(){    

    let data ={image:this.imageLoad().toString()}
    console.log(data.image);
    this.patronService.postImage(data).subscribe(response=>{
      
      this.dataResponseImage.set(response)
      
    })
  }
}
