import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApodService } from '../apod.service';
import { Apod } from '../apod';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apod: Apod;
  date: string;

  constructor(
    private apodService: ApodService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getApod();
    });
  }

  getApod(): void{
    let date = this.route.snapshot.paramMap.get('date');

    if(!date){
      date = new Date().toISOString().slice(0,10);
    }

    this.apodService.getApod(date).subscribe(
      (response)=>{
        this.apod = response
        this.date = this.randomDate(new Date(1995,5,16), new Date());
      }
    );
  }

  randomDate(start, end): string{
    let date = new Date(
      start.getTime() + Math.random() *
        (end.getTime() - start.getTime())
    );

    return new Date(date).toISOString().slice(0,10);
  }
}
