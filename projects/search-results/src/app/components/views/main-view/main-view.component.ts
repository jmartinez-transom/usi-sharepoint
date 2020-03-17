import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService, SharepointIntegrationService } from 'shared-lib';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'sr-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  data: any;
  loading = true;

  constructor(
    private message: MessageService,
    private sis: SharepointIntegrationService
  ) { }

  ngOnInit(): void {
    const search = window.location.pathname.split('/');

    this.loadData(search[search.length - 1]);
  }

  // Custom private methods

  private loadData(search: string) {
    const requests = [];

    environment.sources.forEach(s => {
      requests.push(this.sis.read(s.listName, {
        select: ['Created', 'Id', 'Title'],
        filter: s.fields.map(f => `substringof('${search}', ${f})`)
      }));
    });

    forkJoin(requests)
      .pipe(
        tap(response => console.log(response))
      )
      .subscribe(
        response => this.data = response,
        err => this.message.genericHttpError(err),
        () => this.loading = false
      );
  }

}
