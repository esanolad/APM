import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";
//import {  } from "events";

@Component ({
    selector:"pm-star",
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']

})
export class starComponent implements OnChanges{
    @Input() rating : number;
    @Output() notify: EventEmitter<number> = 
    new EventEmitter<number>();
    starWidth : number;
    ngOnChanges():void{
        this.starWidth=this.rating * 75/5;

    }
    onClick(){
        this.notify.emit(this.rating);
        //console.log(`this ${this.rating} was clicked` )
    }
}