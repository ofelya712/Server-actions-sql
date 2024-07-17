import { getCourseById } from "@/app/lib/api"
import Image from "next/image"

export interface IProps {
    params: {
        id: number

    }
}
export default async function DetailsPage(props: IProps) {
    const details = await getCourseById(props.params.id)

    return <div>
        <p className="is-size-3 p-6 m-6">Course {details.id}</p>
        <h1 className="is-size-2">{details.name}</h1>
        <Image src={`/${details.cover}`}
            alt={details.name}
            width={500}
            height={300} />
        <p>{details.duration} Month</p>

        <strong>{details.price} AMD </strong>
    </div>

}