import Database from 'better-sqlite3'
import { Course } from '../course'

const db=new Database("courses.db")

export interface ICourse{
    id:number 
    price:number 
    duration:number 
    name:string 
    cover:string
}

export type InputCourse=Omit<ICourse,'id'>

export const getAllCourses=():ICourse[]=>{
    return db.prepare(`
        SELECT * FROM courses
        `).all() as ICourse[]
}

export const addCourse=(course:InputCourse)=>{
    db.prepare(`
        INSERT INTO courses(name,price,duration,cover)
        VALUES(@name,@price,@duration,@cover)
        `).run(course)
}

export const getCourseById=(id:number):ICourse=>{
    const course=db.prepare(`
        SELECT * FROM courses WHERE id=?
        `).get(id) as ICourse
        return course
}
export const updateCourse=(course:InputCourse)=>{
    db.prepare(`
        UPDATE courses
        SET name=?,price=?,duration=?
        `).run(course)
}