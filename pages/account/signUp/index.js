import React, {Component} from 'react';
import { connect } from 'react-redux';

import SignUpForm from '../../../components/sign-up-form/signUpForm';
import Layout from '../../../components/MyLayout';
import Meta from '../../../components/meta';

class SignUp extends Component {

    render() {
        
        return(
            <Layout>
            <Meta title='sign-up' desc="Welcome to sign-up page"></Meta>
            <SignUpForm></SignUpForm>
            </Layout>
         )
    }

}

export default connect()(SignUp);