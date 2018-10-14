import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Layout from '../../components/MyLayout.js';
import * as classes from './style';
import Meta from '../../components/meta.js';

class About extends Component {

    static async getInitialProps ({ query, ctx }) {
        
        console.log(query , ctx);
    
        return {  }
      }

      componentDidMount() {
        console.log(this.props)
      }

    render() {
        
        return(
            <Layout>
            <Meta title='About' desc="Welcome to About page"></Meta>
            <p className={classes.about}>This is the about page</p>
            
            <p>{JSON.stringify(this.props.test)}</p>
            <p>
</p>
            </Layout>
         )
    }

}

const mapStateToProps = state => {
    return {
        test: state
    };
  }

export default connect(mapStateToProps)(About);