import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  data = [];
  data2 = [
    {rows: 2, cols: 2, id:1, url: 'https://images.freeimages.com/images/large-previews/996/easter-1399885.jpg'},
    {rows: 1, cols: 1, id:2, url: 'https://images.freeimages.com/images/large-previews/0b3/burning-tree-1377053.jpg'},
    {rows: 1, cols: 1, id:3, url: 'https://images.freeimages.com/images/large-previews/346/cemetery-1404186.jpg'},
    {rows: 1, cols: 1, id:4, url: 'https://images.freeimages.com/images/large-previews/310/resting-peacefully-1574880.jpg'},
    {rows: 1, cols: 1, id:5, url: 'https://images.freeimages.com/images/large-previews/aae/lomo-spider-1386711.jpg'},
    {rows: 2, cols: 2, id:6, url: 'https://images.freeimages.com/images/large-previews/996/easter-1399885.jpg'},
    {rows: 1, cols: 1, id:7, url: 'https://images.freeimages.com/images/large-previews/0b3/burning-tree-1377053.jpg'},
    {rows: 1, cols: 1, id:8, url: 'https://images.freeimages.com/images/large-previews/346/cemetery-1404186.jpg'},
    {rows: 1, cols: 1, id:1, url: 'https://images.freeimages.com/images/large-previews/996/easter-1399885.jpg'},
    {rows: 1, cols: 1, id:2, url: 'https://images.freeimages.com/images/large-previews/0b3/burning-tree-1377053.jpg'},
    {rows: 2, cols: 2, id:3, url: 'https://images.freeimages.com/images/large-previews/346/cemetery-1404186.jpg'},
    {rows: 1, cols: 1, id:4, url: 'https://images.freeimages.com/images/large-previews/310/resting-peacefully-1574880.jpg'},
    {rows: 1, cols: 1, id:5, url: 'https://images.freeimages.com/images/large-previews/aae/lomo-spider-1386711.jpg'},
    {rows: 1, cols: 1, id:6, url: 'https://images.freeimages.com/images/large-previews/996/easter-1399885.jpg'},
    {rows: 1, cols: 1, id:7, url: 'https://images.freeimages.com/images/large-previews/0b3/burning-tree-1377053.jpg'},
    {rows: 1, cols: 1, id:8, url: 'https://images.freeimages.com/images/large-previews/346/cemetery-1404186.jpg'}
  ];
  
  /*
  { rows: 2, cols: 2, data: 1 },
      { rows: 1, cols: 1, data: 2 },
      { rows: 2, cols: 1, data: 3 },
      { rows: 1, cols: 1, data: 4 },
      { rows: 1, cols: 1, data: 4 },

      { rows: 1, cols: 1, data: 5 },
      { rows: 2, cols: 2, data: 6 },
      { rows: 1, cols: 1, data: 7 },
      { rows: 1, cols: 1, data: 8 },
      { rows: 1, cols: 1, data: 9 },

      { rows: 1, cols: 1, data: 10 },
      { rows: 1, cols: 1, data: 11 },
      { rows: 2, cols: 2, data: 12 },
      { rows: 1, cols: 1, data: 13 },
      { rows: 1, cols: 1, data: 14 },

      { rows: 1, cols: 1, data: 5 },
      { rows: 2, cols: 2, data: 6 },
      { rows: 1, cols: 1, data: 7 },
      { rows: 1, cols: 1, data: 8 },
      { rows: 1, cols: 1, data: 9 },
  */

  page = 0;
  size = 10;

  ngOnInit() {
    this.getData({pageIndex: this.page, pageSize: this.size}); // Initiallay (pageIndex:0, page:0, size:4) || Next Page: 4, 1, 4 ..
  }

  getData(obj) {
    console.log('TEST=> PageIndex: ' + obj.pageIndex + ' Page: ' + obj.page + ' Size: ' + obj.size)
    let index=0; // Always 0      
    let startingIndex=obj.pageIndex * obj.pageSize; // 0 * 4 = 0 || Next Page: 1 * 4 = 4 ..
    console.log('TEST=> startingIndex: ' + startingIndex)
    let endingIndex=startingIndex + obj.pageSize; // 0 + 4 = 4 || Next Page: 4 + 4 = 8 ..
    console.log('TEST=> endingIndex:   ' + endingIndex)
    this.data = this.data2.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false; // Elements between 1 & 4 => Return true || Elements between 5 & 8 ...
    });
    console.log('TEST=> Data:   ' + this.data)
  }

}
