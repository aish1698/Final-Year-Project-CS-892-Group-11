import { Component, OnInit } from "@angular/core";
import { Profile } from "src/app/models/profile";
import {AssignmentUploadService} from "src/app/assignment-upload/assignment-upload.service";
import { CurrentrouteService } from "../currentroute.service";
import { LoginteacherService } from "../user/loginteacher/loginteacher.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-assignment-upload',
  templateUrl: './assignment-upload.component.html',
  styleUrls: ['./assignment-upload.component.css']
})
export class AssignmentUploadComponent implements OnInit {
  form!: FormGroup;
  profile!: Profile; 
  imageData!: string;

 userid:any;

constructor(private assignmentuploadService: AssignmentUploadService,private currentroute:CurrentrouteService,
  private logint:LoginteacherService,
  private toastr: ToastrService) {}

  ngOnInit(): void {
    this.userid= localStorage.getItem('userid')
    this.form = new FormGroup({
      sem: new FormControl(null, [Validators.required, Validators.max(8), Validators.min(1), Validators.pattern(/^[0-9]\d*$/)]),
      subject: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      chapter:new FormControl(null, [Validators.required]),

    });
    this.currentroute.setcurrentroute();
    if(this.logint.isStudent()){
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

  onSubmit() 
  {

    console.log("submit");
    this.assignmentuploadService.addProfile(this.form.value.sem,this.form.value.subject, this.form.value.name, this.form.value.image,this.form.value.chapter,this.userid);
   
    if(!(this.form.valid)){
      alert("ALL FIELDS ARE MANDATORY! Please enter the appropriate details.")
      this.form.reset();
      this.imageData=" ";

    }
    if((this.form.valid)){
    
    this.toastr.success('Assignment Uploaded successfully!', '',
    {
      timeOut:2000,
      progressBar:true,
    });
    this.form.reset();
    this.imageData =" ";
    
    }

    
  }

}
