import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Profile } from "src/app/models/profile";
import {AssignmentUploadService} from "src/app/assignment-upload/assignment-upload.service";
import { CurrentrouteService } from "../currentroute.service";
import { LoginteacherService } from "../user/loginteacher/loginteacher.service";


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

constructor(private assignmentuploadService: AssignmentUploadService,private currentroute:CurrentrouteService,private logint:LoginteacherService) {}

  ngOnInit(): void {
    this.userid= localStorage.getItem('userid')
    this.form = new FormGroup({
      sem: new FormControl(null),
      subject: new FormControl(null),
      name: new FormControl(null),
      image: new FormControl(null),
      chapter:new FormControl(null),

    });
    this.currentroute.setcurrentroute();
    if(this.logint.isStudent()){
      console.log("student");
    }
    
    
  }
  onFileSelect(event:any) {
    console.log(event.target.files);
    const file =event.target.files[0]; //(event.target as HTMLInputElement).files[0] | null;
    //file=files[0];
    //console.log(file);
    
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
    
    var sem= document.forms["RegForm"]["sem"];
    var subject= document.forms["RegForm"]["subject"];
    var name= document.forms["RegForm"]["name"];
    var chapter= document.forms["RegForm"]["chapter"];
 
    if (sem.value == "")                                  
  { 
      window.alert("Semester field is empty."); 
      sem.focus(); 
      return false; 
  } 

  if (!(sem.value>=1 && sem.value<=8)   )                              
  { 
      window.alert("Please enter valid semester."); 
      sem.focus(); 
    return false; 
  } 

  if (subject.value == "")                                  
  { 
      window.alert("Subject field is empty."); 
      subject.focus(); 
     return false; 
  } 

  if (name.value == "")                                  
  { 
      window.alert("Name field is empty."); 
      name.focus(); 
     return false; 
  } 

  if (chapter.value == "")                                  
  { 
      window.alert("Chapter field is empty."); 
      chapter.focus(); 
      return false; 
  } 

    console.log("submit");
    this.assignmentuploadService.addProfile(this.form.value.sem,this.form.value.subject, this.form.value.name, this.form.value.image,this.form.value.chapter,this.userid);
    alert(
      "Assignment uploaded successfully"
    )
    this.form.reset();
    this.imageData =" ";
  }

}
