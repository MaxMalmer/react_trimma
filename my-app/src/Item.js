import React from 'react';
import './Item.css';
export default function Item(props) {
    return (
        <div className="Item">
            <p>
                <b>
                {props.name}
                </b>
            </p>
            <img alt={props.name} src={props.icon} />
            <p>
                {props.cost}kr
            </p>
            <input value="Köp" type="button" onClick={() => props.onBuy(props.name, props.cost)} />
        </div>
    );
}