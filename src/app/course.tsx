"use client"

import { ICourse } from "./lib/api"

interface Props {
    elm: ICourse
}

export const Course = ({ elm }: Props) => {
    if (elm) {
        return <div className="course">
            <img src={elm.cover} />
            <strong>{elm.name} <p>{elm.duration} month</p></strong>
            <p>{elm.price} AMD</p>
        </div>


    }
}