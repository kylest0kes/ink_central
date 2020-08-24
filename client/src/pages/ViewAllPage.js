import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import Header from '../components/Header';
import ViewAllCard from '../components/ViewAllCard';
import API from '../utils/API';

export default function ViewAllPage() {
    const [logout, setLogout] = useState({
        loggedOut: false
    })

    const userLogout = e => {
        e.preventDefault();
        
        API.logout()
            .then(res => {
                setLogout({ loggedOut: true })
                console.log(res.data.message)
            })
            .catch(err => console.log(err));
    }

    if (logout.loggedOut) {
        return <Redirect to="/login"/>
    }

    return (
        <div>
            <Header 
                logout={logout}
                userLogout={userLogout}
            />
            <ViewAllCard />
            <ViewAllCard />
        </div>
    )
}
