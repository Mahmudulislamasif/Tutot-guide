import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const params=useParams()
    return (
        <div>
            <h1>Thanks For Your Choice</h1>
        </div>
    );
};

export default CheckOut;