import { Component, Directive } from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {SearchPipe} from '../pipe/search';
import 'rxjs/Rx';


@Component({
	pipes: [SearchPipe],
	selector: 'MainPage',
	templateUrl: 'app/mainpage/mainpage.html'
})

export class MainPageComponent {
	name: String = "";
}

