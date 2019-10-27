/**
 * TextBar
 *
 * Renders the input field of the searchbar
 *
 * @property {Boolean} connected true if the corresponding socket.io connection is connected
 * @property {String} originalUrl the current url of the socket.io connection
 * @property {String} url the current state of the input field
 * @property {Function} changeUrl handle inputchange
 * @property {Function} setNamespaceAndUrl confirm namespace and url and save in redux store
 */

import React from 'react'

import SearchIcon from '../../icons/Search'
import ConnectionIcon from '../../icons/Connection'

const TextBar = ({url, originalUrl, changeUrl, setNamespaceAndUrl, connected}) =>
    <span className="search-text">
        <span className="search-text-icon" onClick={setNamespaceAndUrl}>
            {getIcon(originalUrl, connected)}
        </span>
        <form className="search-text-form" onSubmit={setNamespaceAndUrl}>
            <input onChange={changeUrl} className="search-text-input" type="text" value={url} placeholder="http://192.168.25.10" />
        </form>
    </span>

/**
 * Get the appropriate icon to display based on connection status
 * 
 * @param {String} url
 * @param {Boolean} connected
 * 
 * @return {Object} react component
 */
function getIcon (url, connected) {
    let result
    const customStyle = {transform: 'rotate(45deg)', transformOrigin: 'bottom', left: -7, position: 'relative'}
    if ( connected )
        result = <ConnectionIcon size={20} color={'green'} customStyle={customStyle} />
    else if ( !connected && url )
        result = <ConnectionIcon size={20} color={'red'} customStyle={customStyle} />
    else
        result = <SearchIcon size={20} color={'#333'} />
    return result
}

export default TextBar
