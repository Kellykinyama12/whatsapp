import { useState } from "react";
import { Fragment } from "react";

function ListGroup(props) {


    const [selectedIndex, setSelectedIndex] = useState(-1);



    const handleClick = (event) => console.log(event);

    const listItems = props.cities.map((item, index) =>
        <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={() => { setSelectedIndex(index) }}>{item}</li>
    );

    // const message =
    //     items.map((item) => {
    //         <li className="list-group-item">{item}</li>
    //     });

    // console.log(message);

    return (
        <Fragment>
            <h1>{props.name}</h1>
            <ul className="list-group">
                {listItems}
            </ul>
        </Fragment>
    )
}
export default ListGroup;