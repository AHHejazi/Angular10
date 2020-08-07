import { LookUp } from './../_models/lookUp';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '@app/_services';
import { tap } from 'rxjs/operators';
@Component({
  templateUrl: 'sendmodel.component.html',
})
export class SendmodelComponent implements OnInit {
  ddMinistries: LookUp[];
  ministries: LookUp[];
  filteredMinistries: LookUp[];
  MinistryId = 0;
  loading: boolean = false;
  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.loading = true;
    this.requestService.getMinistries().subscribe({
      next: (data) => {
        (this.ministries = this.ddMinistries = data), (this.loading = false);
      },
    });
  }

  getMinistryById() {
    this.loading = true;
    this.requestService.getMinistryById(this.MinistryId).subscribe({
      next: (data) => {
        (this.ministries = data), console.log(data), (this.loading = false);
      },
    });
  }

  onSubmit() {
    this.getMinistryById();
  }
}
