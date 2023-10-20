import "./Card.css";

export default function ({ id, title }){
    return (
        <div className="card">
            <div className="flex-container">
                <div className="id">{id}</div>
                <div className="photo"><img src="pexels-photo-2380794.jpeg"></img> </div>
            </div>
            <div className="title"> {title}</div>
            <div className="flex-container-together">
                <div className="border"><span className="material-symbols-outlined"> priority_high </span></div>
                <div className="border"><span className="material-symbols-outlined">
fiber_manual_record
</span> Feature Request</div>
            </div>
        </div>
    )

}
