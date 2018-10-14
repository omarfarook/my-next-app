import React, {Component}  from 'react';
import { Link, Router } from '../appRoutes';

class Header extends Component {
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        const handleRouteChange = url => {
          //  console.log('App is changing to: ', url)
          }
          Router.events.on('routeChangeStart', handleRouteChange);
    }
      
    componentDidMount() {
        const handleRouteChangeEnd = url => {
         //  console.log('App end is changing to: ', url)
          }
          Router.events.on('routeChangeComplete', handleRouteChangeEnd);
    }
    
    render() {
        const href = {
            pathname: '/about',
            query: { name: 'zeit' }
          }
          
          const as = {
            pathname: '/about/zeit',
            hash: 'title-1'
          }

        const linkStyle = {
            marginRight: 15
          }

        return (
            <div>
                <Link href="/">
                  <a style={linkStyle}>Home</a>
                </Link>
                <Link as='/about' href={{ pathname: '/about', query: { name: 'Zeit' } }} params={{ slug: 'hello-world' }}>
                  <a style={linkStyle}>About</a>
                </Link>
                <Link as={as} href={href}>
                <a style={linkStyle}>About With Obj</a>
              </Link>
                <Link href="/account/signUp">
                  <a style={linkStyle}>Register</a>
                </Link>
            </div>
        )
    }
}

export default Header