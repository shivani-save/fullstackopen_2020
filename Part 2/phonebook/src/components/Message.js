import React from 'react'

    const Message = ({ message }) => {
        if (message === null) {
            return null
        }
    
        else {

            return (
                <div className="success">
                    {message}
                </div>
            )
        }
    }

    export default Message