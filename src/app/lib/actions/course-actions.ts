"use server"

import { createWriteStream } from "fs"
import { addCourse, InputCourse } from "../api"
import { redirect } from "next/navigation"

export const handleAdd = async (data: FormData) => {
    let photo = data.get("cover") as File
    const filename = Date.now() + "." + photo.type.split("/").at(-1)

    const stream = createWriteStream("public/images/" + filename)
    const bufferedImage = await photo.arrayBuffer()
    stream.write(Buffer.from(bufferedImage))

    let course: InputCourse = {
        name: data.get("name") as string,
        cover: "images/" + filename,
        price: +(data.get("price") as string),
        duration: +(data.get("duration") as string)
    }

    addCourse(course)
    redirect("/")
}