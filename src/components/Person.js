import React from 'react'

function Person(props) {
    return (
        <div>
            this is person page {props.match.params.personName}
        </div>
    )
}

export default Person;