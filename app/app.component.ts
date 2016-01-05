import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.view.html'
})

export class AppComponent {
    public message: string;
    
    setMessage() {
        this.message = 'this works';
        this.message = 'Hello World';
        var thisIsHappening = 4;
    }
}