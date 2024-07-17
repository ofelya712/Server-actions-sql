import { handleAdd } from "@/app/lib/actions/course-actions";
import { IProps } from "../../details/[id]/page";
import { getCourseById } from "@/app/lib/api";

export default async function Page(props: IProps) {

    const edit = await getCourseById(props.params.id)
    return <>
        <h1>EDIT</h1>
        <div className="columns">
            <div className="is-two-fifth my-4">
                <form className="box my-5" action={handleAdd}>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="name"
                            value={edit.name}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="price"
                            value={edit.price}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="duration"
                            value={edit.duration}
                        />
                    </div>



                    <div className="field my-4">
                        <button className="button is-danger">submit</button>
                    </div>
                </form>
            </div>
        </div>


    </>
}