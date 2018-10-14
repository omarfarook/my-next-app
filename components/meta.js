import React, { Component } from 'react';
import Head from 'next/head'

class Meta extends Component {
    render() { 
        return ( 
            <div>
                <Head>
                    <title>{this.props.title}</title>
                    <meta name="description" content={this.props.desc}></meta>
                </Head>
            </div>
         );
    }
}
 
export default Meta;