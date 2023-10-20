import "./CardHolder.css"
import Card from "./Card"
export default function CardHolder({list}) {
    return (
        <div className="card-holder">
            {Object.keys(list).map(elemname=>{
                return (
                <div key={elemname} className="box">
                    <div className="big-font">{list[elemname].header} </div>
                    {list[elemname].tickets.map((elem,index)=>{
                        return <Card key={elem.id} id={elem.id} title={elem.title} />
                    }
                    )}
                </div>
                );
            })}
        </div>
    )
}