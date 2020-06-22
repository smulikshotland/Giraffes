import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-j-page',
  templateUrl: './j-page.component.html',
  styleUrls: ['./j-page.component.css']
})
export class JPageComponent implements OnInit {

  selectedj:jiraff 
  white:string
  delete:string
  constructor() { }

  

  ngOnInit(): void {
  }
  deletej(jid){
    let index = this.jiraffsArray.findIndex(j =>j.id == j.id)
    this.jiraffsArray.splice(index,1)

  }

  jiraffsArray:jiraff[]=[
    {id:1,name:'aaa',height:3.55,color:'blue',isBossy:false},
    {id:2,name:'bbb',height:4.44,color:'BLACK',isBossy:false},
    {id:3,name:'ccc',height:6.44,color:'RED',isBossy:true},
    {id:4,name:'ddd',height:3.77,color:'GREEN',isBossy:false},
    {id:5,name:'eee',height:8.44,color:'PURPLE',isBossy:true},
    {id:6,name:'fff',height:9.11,color:'NAVY',isBossy:false},
    {id:7,name:'ggg',height:2.44,color:'TEAL',isBossy:true},
    {id:8,name:'hhh',height:2.44,color:'TEAL',isBossy:true},
    {id:9,name:'iii',height:2.44,color:'TEAL',isBossy:false},
    {id:10,name:'jjj',height:2.44,color:'TEAL',isBossy:true},
    {id:11,name:'kkk',height:2.44,color:'TEAL',isBossy:false},
    {id:12,name:'lll',height:2.44,color:'TEAL',isBossy:true}
  ]


}

export class jiraff{
  id:number
  name:string
  height:number
  color:string
  isBossy:boolean
}
