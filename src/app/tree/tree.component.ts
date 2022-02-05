import { Component, OnInit } from '@angular/core';

import { Http } from "@angular/http";
import { element } from 'protractor';

import { DragAndDropEventArgs } from '@syncfusion/ej2-angular-navigations';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {


  public treeDataExample: Object[] = [
    {
      nodeId: '1', nodeText: 'Documents',
      nodeChild: [
        { nodeId: '11', nodeText: 'Team management.docx' },
        { nodeId: '12', nodeText: 'Entity Framework Core.pdf' },
      ]
    },
    {
      nodeId: '2', nodeText: 'Downloads',
      nodeChild: [
        { nodeId: '21', nodeText: 'Sales report.ppt' },
        { nodeId: '22', nodeText: 'Introduction to Angular.pdf' },
        { nodeId: '23', nodeText: 'Paint.exe' },
        { nodeId: '24', nodeText: 'TypeScript sample.zip' },
      ]
    },
    {
      nodeId: '3', nodeText: 'Music',
      nodeChild: [
        { nodeId: '31', nodeText: 'Crazy tone.mp3' }
      ]
    },
    {
      nodeId: '4', nodeText: 'Videos',
      nodeChild: [
        { nodeId: '41', nodeText: 'Angular tutorials.mp4' },
        { nodeId: '42', nodeText: 'Basics of Programming.mp4' },
      ]
    }
  ];



  public responseInfo: Object[] = [];

  public treeData: Object[] = [
    {
      nodeId: '1', nodeText: 'Apple',
      nodeChild: [
        { nodeId: '11', nodeText: '50' },
        { nodeId: '12', nodeText: '<button ejs-button cssClass="e-info">Edit</button>' },
      ]
    },
    {
      nodeId: '2', nodeText: 'Mango',
      nodeChild: [
        { nodeId: '21', nodeText: '30' },
        { nodeId: '22', nodeText: '<button ejs-button cssClass="e-info">Edit</button>' },
      ]
    },
  ];


  public treeFields: Object = {
    dataSource: this.treeData,
    id: 'nodeId',
    text: 'nodeText',
    child: 'nodeChild'
  };


  public treeFieldsExample: Object = {
    dataSource: this.treeDataExample,
    id: 'nodeId',
    text: 'nodeText',
    child: 'nodeChild'
  };

  public nodeDrag(args: DragAndDropEventArgs): void {
    console.log("Continue Drag and Drop...");
  }


  public dragStop(args: DragAndDropEventArgs): void {
    alert("You have just move an item");
  }


  constructor(private http: Http) { }

  ngOnInit() {

    this.http.get('http://127.0.0.1:8000/api/info').subscribe(response => {

      console.log(response.json());
      this.responseInfo = response.json();

      this.responseInfo.forEach(element => {
        console.log(element["name"]);
      });

    });

  }

}
