import React from "react";

const Kit = (
    props: { items: any[] }
    ) => {
    let kitList : any[] = [];
    if(props.items){
        kitList = props.items.map( (item: { aparatus: string }) => {
            return (<span key={item.aparatus}> {item.aparatus} </span>)
        });
    }
    return (
        <p>
            <sup>*</sup>
            <small>Optional</small>
            {kitList}
            <small>visit the store</small>
        </p>
    )
};

export default Kit;
