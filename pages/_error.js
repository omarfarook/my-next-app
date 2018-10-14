import React, {Component} from 'react';
import Link from 'next/link'

class Error extends Component {

    render() {
        return(
            <div><p>404 page not found</p>
            <Link href="/">click here</Link>
            </div>
        )
    }

}

export default Error;