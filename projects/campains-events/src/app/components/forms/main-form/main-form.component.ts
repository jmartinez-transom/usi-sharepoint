import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { FormsService,SharepointIntegrationService, ImageUploadControlComponent } from 'shared-lib';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ce-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  countries = [
    {
      label: 'Canada',
      value: [
        {
          label: 'Montreal',
          value: 'Mon'
        },
        {
          label: 'Quebec',
          value: 'Que?'
        }
      ]
    },
    {
      label: 'México',
      value: [
        {
          label: 'San Luis Potosi',
          value: 'SLP'
        },
        {
          label: 'Queretaro',
          value: 'QRO'
        }
      ]
    },
    {
      label: 'Estados Unidos',
      value: [
        {
          label: 'Arizona',
          value: 'AZ'
        },
        {
          label: 'Ohio',
          value: 'OH'
        }
      ]
    }
  ];
  @Input() data: any;
  @ViewChild('image') iucc: ImageUploadControlComponent;
  flags = {
    loadingFields: true
  };
  private isNew: boolean;
  mainForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fs: FormsService,
    private sis: SharepointIntegrationService
  ) { }

  ngOnInit() {
    this.isNew = this.data ? false : true;

    this.setupForm();

    this.stateCtrl.disable();

    setTimeout(() => {
      this.iucc.required = true;
    });

    // Event listeners

    const ref$ = this.countryCtrl.valueChanges.subscribe(response => {
      this.stateCtrl.enable();

      ref$.unsubscribe();
    });
  }

  // Custom public methods

  disableFields() {
    this.fs.disableFields(this.mainForm);
  }

  enableFields() {
    this.fs.enableFields(this.mainForm);
  }

  submit() {
    const values = this.mainForm.value;

    console.log(values);

    return;

    const data: any = {
      __metadata: environment.sharepoint.metadata,
      Title: values.title
    };

    if (values.id) {
      data.Id = values.id;
    }

    return this.sis.getFormDigest().pipe(
      switchMap(formDigest => {
        return this.sis.save(environment.sharepoint.listName, data, formDigest);
      })
    );
  }

  // Custom private methods

  private setupForm() {
    this.mainForm = this.fb.group({
      country: [null, Validators.required],
      date: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      gender: null,
      id: null,
      image: null,
      keywords: null,
      rfc: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]{4}\d{6}$/)]],
      state: [null, Validators.required],
      title: [null, Validators.required]
    });

    // if (!this.isNew) {
      this.mainForm.patchValue({
        // id: this.data.id,
        image: {
          data: '',
          name: 'Archivo',
          type: 'image/png'
        },
        keywords: {
          keywords: 'wororo,wororo'
        }
        // title: this.data.title
      });
    // }
  }

  // Getters and setters

  get countryCtrl() {
    return this.mainForm.get('country');
  }

  get emailCtrl() {
    return this.mainForm.get('email');
  }

  get rfcCtrl() {
    return this.mainForm.get('rfc');
  }

  get stateCtrl() {
    return this.mainForm.get('state');
  }

}
