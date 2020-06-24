import React from 'react';


const pageWrapper = ({ children }) => {

    return (
        <div style={{ margin: '100px', padding: '50px', backgroundColor: 'grey' }}>
            {children}
        </div>
    )
}

export default pageWrapper;
