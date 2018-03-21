import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styled from 'styled-components';
import { isEmpty } from 'lodash';
import SignInWrapper from '../../components/SignInWrapper';
import SignInForm from './signinForm.js';

import { loadRecentBlogPosts } from '../../reducer/blog'


class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    componentWillMount() {
        this.props.loadRecentBlogPosts();
    }

    render() {
        const { ...props } = this.props;

        return (
            <SignInWrapper showBlogPosts="yes">
            {
                <SignInForm>

                </SignInForm>
            }
            </SignInWrapper>
        )
    }
}

const mapDispatchToProps = {

};

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);