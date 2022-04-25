import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                nome: 'Angular',
                imageUrl: '',
                price: 24.99 ,
                code: '22',
                duration: '90 h',
                rating: 4.2
            },
            {
                id: 2,
                nome: 'JavaScript',
                imageUrl: '',
                price: 23.50,
                code: '2',
                duration: '122 h',
                rating: 4.7
            }
    ]
    }

}