import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {

  result;
  constructor(private _route: ActivatedRoute, private _result: ResultService) { }


  // this._question.saveresult(saveresul).subscribe(res=>{
  //   console.log(res);
  // })

  uid=localStorage.getItem('user_id');

  ngOnInit(): void {

    this._result.getResult(this.uid).subscribe(res=>{
      console.log(res);
      this.result=res;
    })
  }

}
