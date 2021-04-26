import { Component, OnInit,ViewChild } from '@angular/core';
declare var Peer:any;
@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.css']
})
export class VideoCallComponent implements  OnInit{
@ViewChild('myvideo',{static:true}) myVideo:any;
   peer: any;
   anotherId:any;
   mypeerid:any;

  constructor() { }

  ngOnInit(): void {
      let video=this.myVideo.nativeElement;
    this.peer=new Peer();
    setTimeout (()=>{
      this.mypeerid=this.peer.id;
      console.log("Your unique id is"+this.mypeerid);
    },3000)
    this.peer.on('connection', function(conn:any) {


      conn.on('data', function(data:any){
        // Will print 'hi!'
        alert(data);
      });


    });

    var n=<any>navigator;
     n.mediaDevices.getUserMedia = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia||n.msGetUserMedia;
     this.peer.on('call', function(call:any) {


  n.getUserMedia({video
    : true, audio: true}, function(stream:any) {
    call.answer(stream);
   // Answer the call with an A/V stream.
    call.on('stream', function(remotestream:any) {
      video.srcObject=remotestream;
video.play();



        // Show stream in some video/canvas element.
    });
},function(err:any) {
  console.log('Failed to get local stream' ,err);
});

});


}



connect(){
  var conn = this.peer.connect(this.anotherId);
// on open will be launch when you successfully connect to PeerServer
conn.on('open', function(){
  // here you have conn.id
  conn.send('Message from other id!');
});
}
videoconnect(){
  let video=this.myVideo.nativeElement;
  var localid=this.peer;
  var otherid=this.anotherId;
  var n=<any>navigator;
   n.mediaDevices.getUserMedia = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia ||n.msGetUserMedia;
n.getUserMedia({video: true, audio: true}, function(stream:any) {
  var call = localid.call(otherid, stream);
  call.on('stream', function(remotestream:any) {
    video.srcObject=remotestream;
    video.play();

      // Show stream in some video/canvas element.
    });

  },function(err:any) {
    console.log('Failed to get local stream' ,err);


});
}
videoDisconnect(){

location.reload();




}
autoConnect(){
var v=document.getElementById('VidTwo') as HTMLVideoElement;
var k=<any>navigator
k.getUserMedia=k.getUserMedia||k.webkitGetUserMedia || k.mozGetUserMedia ||k.msGetUserMedia;
if(navigator.getUserMedia){
navigator.getUserMedia({video:true},handleVideo,videoError);

}
function handleVideo(stream: any){
v.srcObject=stream;
v.play();
}
function videoError(e: any){
console.log("Failed to get video stream",e);
}}
}
