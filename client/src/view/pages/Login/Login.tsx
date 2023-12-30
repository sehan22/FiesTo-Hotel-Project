import React, {Component} from 'react';
import LoginPageBGImg from '../../../images/LoginPage/LoginPageBGImg.png'

export class Login extends Component {
    render() {
        return (
            <div className="h-screen flex justify-center items-center"
                 style={{background: `url(${LoginPageBGImg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <div></div>
            </div>
        );
    }
}