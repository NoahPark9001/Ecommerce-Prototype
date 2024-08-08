import { Link} from "react-router-dom";
import React from "react"

export default function CategoryItem({src, title, name,description}){

    return(
        <div className="bg-white shadow-md ">
            <Link href={"./productPage/"}>
                <img src={src} alt={title} />
                <h1>{name}</h1>
                <h2 className="text-sm text-gray-600">{description}</h2>
            </Link>
            
        </div>
    )
}