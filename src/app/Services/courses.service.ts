import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Course } from "../model/course";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  // service is stateless
  // not Promise<course[]>
  loadAllCourses(): Observable<Course[]> {
    //rxjs shakable functions
    return this.http
      .get<Course[]>("/api/courses")
      .pipe(map((res) => res["payload"]));
  }
}
