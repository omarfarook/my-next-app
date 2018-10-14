
import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import { addLocaleData, IntlProvider } from 'react-intl';
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import { makeStore } from '../store';
import WithRedux from '../components/hoc/withRedux'
 
class MyApp extends App {
 
    static async getInitialProps({Component, ctx}) {
 
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
 
        return {pageProps};
 
    }
 
    render() {
        const {Component, pageProps, reduxStore} = this.props
        return (
            <Container>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
 
}
 
export default WithRedux(MyApp)