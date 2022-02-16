import React from "react";

const getPageTitle = () => {
    let url = location.href;
    
    if (/admin/.test(url)) {
        return 'Admin Page'
    }
    else if (/users/.test(url)) {
        return 'Member Availability'
    }
    else if (/about/.test(url)) {
        return 'Developer Info'
    }
    else {
        return 'Scheduling App'
    }
}

const Header = () => {
    return (
        <div>
            <h1 style={ {textAlign: "center"} }>
                {getPageTitle()}
            </h1>
        </div>
    )
}


export default Header;