import React from 'react'
import './homepage.styles.scss'
import Directory from '../../component/directory/directory.component';

const HomePage = ({history}) => {
    return (
        <div className='homepage'>
            <Directory history={history}/>
        </div>
    )
}

export default HomePage