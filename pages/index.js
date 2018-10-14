import React from 'react'
import {connect} from 'react-redux';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import {startClock, serverRenderClock} from '../store'
// import Examples from '../components/examples'
import Layout from '../components/MyLayout';
import Meta from '../components/meta';

class Index extends React.Component {

  static async getInitialProps  ({ reduxStore, req }) {
    // const isServer = !!req
    //reduxStore.dispatch(serverRenderClock(isServer))
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
  
    // console.log(`Show data fetched`, data);
  
    return {
      shows: data
    }
  }

  componentDidMount () {
    const {dispatch} = this.props
    //this.timer = startClock(dispatch);
    console.log(process.env.TEST);
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Layout>
            <Meta title='Home' desc="Welcome to Home page"></Meta>
            <p>This is the hoME page</p>
            <ul>
            <ul>
            {this.props.shows.map(({show}) => (
              <li key={show.id}>
                <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                  <a>{show.name}</a>
                </Link>
              </li>
            ))}
          </ul>
    </ul>
      </Layout>
    )
  }
}

export default connect()(Index)
