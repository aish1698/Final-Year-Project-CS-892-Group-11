import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, MaxValidator } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Profile } from "src/app/models/profile";
import { TeachingService } from "src/app/teaching/teaching.service";
import { ApiService } from "../api.service";
import { CurrentrouteService } from "../currentroute.service";
import { ListService } from "../list/list.service";
import { LoginteacherService } from "../user/loginteacher/loginteacher.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {

  form!: FormGroup;
  profile!: Profile;
  imageData!: string;
  userid: any;
<<<<<<< Updated upstream
  constructor(private teachingService: TeachingService,private currentroute:CurrentrouteService,private logint:LoginteacherService,    private http:HttpClient,
    private service:ApiService,
    private route:ActivatedRoute,
    private router : Router,
    private ref: ChangeDetectorRef,
    private list:ListService,
    private toastr: ToastrService) {}
=======
  constructor(
    private teachingService: TeachingService,
    private currentroute: CurrentrouteService,
    private logint: LoginteacherService,
    private router: Router,
    private list: ListService) { }
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.userid = localStorage.getItem('userid');
    this.form = new FormGroup({
      sem: new FormControl(null, [Validators.required, Validators.max(8), Validators.min(1), Validators.pattern(/^[0-9]\d*$/)] ),
      subject: new FormControl(null,[Validators.required]),
      name: new FormControl(null,[Validators.required]),
      image: new FormControl(null,[Validators.required]),
      chapter: new FormControl(null,[Validators.required]),

    });
    this.currentroute.setcurrentroute();
    if (this.logint.isStudent()) { 
      console.log("student");
    }
  }

  onFileSelect(event: any) {
    console.log(event.target.files);
    const file = event.target.files[0];

    this.form.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg", "application/pdf", "video/mp4"];
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
<<<<<<< Updated upstream
    this.teachingService.addProfile(this.form.value.sem,this.form.value.subject, this.form.value.name, this.form.value.image,this.form.value.chapter,this.userid);
    this.toastr.success('Material Uploaded successfully!', '',
    {
      timeOut:2000,
      progressBar:true,
    });
    this.imageData =" ";
    this.form.reset();
    
  }
  
  onupdate(){
    this.router.navigate(['/tutorial']);
=======
    this.teachingService.addProfile(
      this.form.value.sem, 
      this.form.value.subject,
      this.form.value.name, 
      this.form.value.image, 
      this.form.value.chapter, 
      this.userid
      );
    if(!(this.form.valid)){
      alert("FUCK!!!!")
      this.form.reset();

    }
    if((this.form.valid)){
      
    alert(
      "Material uploaded successfully"
    )
    
    this.form.reset();
    this.imageData = " ";
    }
  }

  onupdate() {
   
      this.router.navigate(['/updatetutorial']);  
    
    
>>>>>>> Stashed changes
  }

}