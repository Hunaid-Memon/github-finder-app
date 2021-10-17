import React from 'react'
import PropTypes from 'prop-types'

const RepoItem = ( {repo} ) => {
    return (
        <div className='card'>
            <h4> <a href={repo.html_url} target='_blank' rel="noreferrer" >{repo.name}</a></h4>
            {/* console.log(repo.html_url); */}
        </div>
    )
}

RepoItem.prototype = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem;