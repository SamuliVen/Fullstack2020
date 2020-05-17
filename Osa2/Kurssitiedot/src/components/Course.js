  
import React from 'react'

const Header = (props) => {
    return (
        <>
            <h3>{props.course}</h3>
        </>
    )
}

const Content = (props) => {
    return (
        <>
            {props.course.map((course, i) => 
            <Part key={i} part={course.name} exercises={course.exercises} />)}
        </>
    )
}

const Part = (props) => {
    return (
        <>
            <p>{props.part} {props.exercises}</p>
        </>
    )
}

const Total = (props) => {
    let total = props.course.reduce(function(sum, course){
        return sum + course.exercises
    }, 0)

    return (
        <>
            <b>Total of {total} exercises</b>
        </>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header course={course.name} />
            <Content course={course.parts} />
            <Total course ={course.parts}/>
        </>
    )
}

export default Course