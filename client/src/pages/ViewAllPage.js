import React from 'react';
import { Redirect } from "react-router-dom";
import Header from '../components/Header';
import ViewAllCard from '../components/ViewAllCard';

export default function ViewAllPage(props) {
    console.log("viewAll log: " + props.authState.authorized)
    // if (props.authState.authorized) {
    //     return <Redirect to="/login"/>
    // }

    return (
        <div>
            <Header logout={props.logout} />
            <ViewAllCard />
            <ViewAllCard />
        </div>
    )
}
