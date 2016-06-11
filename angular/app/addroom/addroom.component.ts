import { Component, Directive } from '@angular/core';
import {FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from '@angular/common'
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http';
import 'rxjs/Rx';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
  selector: 'addroom',
  templateUrl: 'app/addroom/addroom.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})

export class AddRoom {

  registerForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  select: number = 1;

  constructor(builder: FormBuilder, http: Http, router: Router) {
    this.http = http;
    this.router = router;
    this.registerForm = builder.group({
      roomName: ["", Validators.none],
      hasTV: [this.select, Validators.none],
      beds: ["", Validators.none],
    });
  }

  onAddRoom(): void {
    var data = "roomName=" + this.registerForm.value.roomName + "&hasTV=" + this.select + "&beds=" + this.registerForm.value.beds;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost/it255-dz09/php/addroomservice.php', data, { headers: headers })
      .map(res => res)
      .subscribe(data => this.postResponse = data,
      err => alert(JSON.stringify(err)),
      () => {
        if (this.postResponse._body.indexOf("error") === -1) {
          alert("Uspesno dodavanje sobe");
          this.router.navigate(['./']);
        } else {
          alert("Neuspesno dodavanje sobe");
        }
      }
      );

  }
}
