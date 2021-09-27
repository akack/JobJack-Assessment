import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  path = ''
  _array = [] as any
  loading = false
  file = {
    filePath: ''
  } as any
  filePath = ''
  headElements = ['Name', 'Path', 'Type', 'Size', 'Created Time'];
  type = ''
  msg = 'No files or directory'
  error = ''
  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    // this.submitData()
  }

  submitData(file: any) {
    this.loading = true;
    if(this.file.filePath) {
      this.file.filePath = this.file.filePath + '/' + file;
      this.filePath =  this.file.filePath + '/' + file
    }
    else this.file.filePath = file;
    this._apiService.getDirectory(this.file)
    .subscribe(
      res => {
        if(res){
          if(res.children.length === 0) {
            this.filePath = '';
            this.file.filePath = '';
            this.msg = 'No files or directory found';
            this.error = ''
          }
          this._array = res.children;
          this.loading = false;
          this.error = ''

        }else {
          this.loading = false;
          this.filePath = '';
          this.file.filePath = '';
          this.error = 'Unable to locate the given directory or path. Please try again.'
        }
      },
      err => {
        this.loading = false;
        console.log('Error: ', err);
      }
    )
  }

  reset() {
    this._array = [];
    this.filePath = '';
    this.file.filePath = '';
  }

}
