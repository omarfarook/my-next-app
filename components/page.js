import React from 'react';
import { Provider } from 'react-redux';
import store from '../lib/initRedux';
const page = (Page) => {
    return (
        class PageWrapper extends React.Component {
            render() {
                return (
                    <Provider store={store}>
                        <Page />
                    </Provider>
                )
            }
        }
    )
}
export default page;