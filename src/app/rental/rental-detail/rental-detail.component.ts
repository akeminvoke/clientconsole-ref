import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { HelperService } from '../../shared/service/helper.service';

import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  public rental: Rental;

  constructor(public rentalService: RentalService,
              public route: ActivatedRoute,
              public helper: HelperService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getRentalById(params['rentalId']);
    });
  }

  getRentalById(id: string) {
    this.rentalService.getRentalById(id).subscribe((rental) => {
      this.rental = rental;
    })
  }
}
