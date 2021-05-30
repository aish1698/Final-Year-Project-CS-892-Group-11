import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Profile } from "src/app/models/profile";
import {AnswerUploadService} from "src/app/answer-upload/answer-upload.service";
import { CurrentrouteService } from "../currentroute.service";
import { LoginService } from "../user/login/login.service";

@Component({
  selector: 'app-answer-upload',
  templateUrl: './answer-upload.component.html',
  styleUrls: ['./answer-upload.component.css']
})
export class AnswerUploadComponent implements OnInit {
  form!: FormGroup;
  profile!: Profile; 
  imageData!: string;
  userid: any;

  constructor(private answerUploadService: AnswerUploadService,private currentroute:CurrentrouteService,private login:LoginService) {}

  ngOnInit(): void {
    this.userid= localStorage.getItem('userid');
    this.form = new FormGroup({
      sem: new FormControl(null, [Validators.required, Validators.max(8), Validators.min(1), Validators.pattern(/^[0-9]\d*$/)]),
      subject: new FormControl(null,[Validators.required]),
      name: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      chapter:new FormControl(null, [Validators.required]),

    });
    this.currentroute.setcurrentroute();
   if(this.login.isStudent()){
     console.log("student");
   }
  }
  onFileSelect(event:any) {
    console.log(event.target.files);
    const file =event.target.files[0]; 
    
    this.form.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg","application/pdf","video/mp4"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {

  

    console.log("submit");
    this.answerUploadService.addProfile(this.form.value.sem,this.form.value.subject, this.form.value.name, this.form.value.image,this.form.value.chapter,this.userid);
    
    if(!(this.form.valid)){
      alert("FUCK!!!!")
      this.form.reset();

    }

    if((this.form.valid)){
    alert(
      "Answer uploaded successfully"
    )
    this.form.reset();
    this.imageData =" ";
    }
  }

}
