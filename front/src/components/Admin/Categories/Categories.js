import CreateCategory from "./CreateCategory";
import './Categories.css'
import DeleteCategory from "./DeleteCategory";
import UpdateCategory from "./UpdateCategories";


export default function Categories(){

    return (
        <div className="creators">
            <CreateCategory/>
            <DeleteCategory/>
            <UpdateCategory/>
        </div>
    )
}