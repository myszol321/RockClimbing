import React from 'react';
import { Link } from 'react-router-dom';

export default function ConditionalLink(props) {
    return ( 
        (!!props.condition && props.to) 
        ? <Link to={props.to}>{props.children}</Link> 
        : <>{props.children}</> 
    )
}