import { Component, Directive } from '@angular/core';
import {FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from '@angular/common'
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http';
import {DataTableDirectives} from 'angular2-datatable/datatable';


@Component({ 
  selector: 'AllRoomsPage', 
  templateUrl: 'app/allrooms/allrooms.html',
    providers: [HTTP_PROVIDERS],
    directives: [DataTableDirectives]
})

export class AllRoomsComponent { 
	private data;

    constructor(private http:Http) {
	
	
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	headers.append('token', localStorage.getItem('token'));
	http.get('http://localhost/it255-dz09/php/getrooms.php',{headers:headers})
		.map(res => res.json()).share()
		.subscribe(data => {
			this.data = data.rooms; 
		},
		err => {
			 this.router.parent.navigate(['./MainPage']);
		}
		);
	
    }
    private sortByWordLength = (a: any) => {
        return a.name.length;
    }

    public removeItem(item: Number) {
      console.log("Remove: ", item);
	  var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		headers.append('token', localStorage.getItem('token'));
	  this.http.get('http://localhost/it255-dz09/php/deleteroom.php?id='+item,{headers:headers})  .subscribe( data => this.postResponse = data);
	 alert("Uspesno obrisana soba");
     location.reload();
   }



}

