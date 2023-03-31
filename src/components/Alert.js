import React from 'react'

function Alert(props) {
    return (

        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
            <strong>{props.alert.msg}</strong>
            {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>

    )
}

export default Alert;