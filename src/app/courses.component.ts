import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector:'courses',
    template: `
        <h2 class="h2">{{ title }}</h2><label>Interpolacion</label>
        <br>
        <table border=1>
            <tr>
                <td [attr.colspan]="colSpan"> <!--<label>Property Binding to HTML property</label>-->
                    <img [src]="imageUrl"/> <label>Property binding</label>
                </td>
            </tr>
        </table>
        <button class="btn btn-primary" [class.active]="isActive">Summit</button> <label>Class Binding</label>
        <br>
        <button [style.backgroundColor]="isActive ? 'blue' : 'red'">Cancel</button> <label>Style Binding</label>
        <br>
        <div (click)="onDivClicked($event)">
            <button (click)="onSave($event)" [style.backgroundColor]="isActive ? 'blue' : 'red'">evento</button> <label>Event</label>
        </div>
        <input (keyup)="onKeyUp($event)"/> <label>Event</label> <br/>
        <input (keyup.enter)="onKeyUp2()"/> <label>Event Filtering</label><br/>
        <input (keyup.enter)="onTemplateVariable($event)"/> <label>Template Variable</label><br/>
        <input #email (keyup.enter)="onTemplateVariable2(email.value)"/> <label>Template Variable Easy way</label><br/>
        <input (keyup.enter)="email2 = $event.target.value; onKeyUpTwoWayBinding()"/> <label>Two Way binding option 1</label><br/>
        <input [(ngModel)]="email2" (keyup.enter)="onKeyUpTwoWayBinding()"/> <label>Two Way binding banana in a box</label><br/>
        <h2>Pipes</h2>
        {{ course.title | uppercase | lowercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number:'2.2-3' }} <br/>        
        {{ course.price | currency:'USD':"code":'3.2-2' }} <br/> <!--{{ course.price | currency:'COP':true:'3.2-2' }}-->
        {{ course.releaseDate | date:'shortDate' }} <br/>
        {{ text | summary:25 }}
        `
})
export class CoursesComponent{
    title = 'List of Courses';
    imageUrl = "http://lorempixel.com/500/400"; 
    colSpan : number = 2;
    isActive : boolean = true;
    email2 : string = "correo@ejemplo.com";
    text : string = `Zeus is the sky and thunder god in ancient Greek religion, who rules as king of the gods of Mount Olympus. His name is cognate with the first element of his Roman equivalent Jupiter. His mythology and powers are similar, though not identical, to those of Indo-European deities such as Jupiter, Perkūnas, Perun, Indra, Dyaus and Thor. 
    Zeus is the child of Cronus and Rhea, the youngest of his siblings to be born, though sometimes reckoned the eldest as the others required disgorging from Cronus's stomach. In most traditions, he is married to Hera, by whom he is usually said to have fathered Ares, Hebe, and Hephaestus. At the oracle of Dodona, his consort was said to be Dione, by whom the Iliad states that he fathered Aphrodite. Zeus was also infamous for his erotic escapades. These resulted in many divine and heroic offspring, including Athena, Apollo, Artemis, Hermes, Persephone, Dionysus, Perseus, Heracles, Helen of Troy, Minos, and the Muses.`;
    
    course = {
        title: "The Complete Angular Course",
        students: 30123,
        rating: 4.9745,        
        price: 190.95,
        releaseDate: new Date(2020,10,4)
    }

    onSave($event){
        $event.stopPropagation();//Detiene el efecto de reventado de arbol de elementos <div>, si se quita se dispara el evento onDivClicked()
        console.log("Boton clickeado", $event);
        this.isActive = !this.isActive;
    }

    onDivClicked($event){        
        console.log("Evento del div")
    }

    onKeyUp($event){
        //Se ejecuta solo si se presiona enter en el input
        if($event.keyCode == 13)
            console.log("Enter presionado");
    }

    onKeyUp2(){
        //Se ejecuta solo si se presiona enter en el input, se filra desde angular que se presione enter
        console.log("Enter presionado");
    }

    onTemplateVariable($event){
        console.log($event.target.value);
    }

    onTemplateVariable2(email){
        console.log(email);
    }

    onKeyUpTwoWayBinding(){
        console.log(this.email2);
    }
}