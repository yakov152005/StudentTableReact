import React from 'react';

function Client(props) {
    const client = props.clientData;
    return (
        <div className="App" style={{border:"1px solid black"}}>
            <div>Name: {client.name} </div>
            <div>Phone: {client.phone} </div>
            <div>Number of purchases: {client.purchase}</div>
            {
                client.purchase > 10 &&
                <div> This is a Vip client! </div>
            }
        </div>

    )
}

export default Client;