import React, { Component } from 'react';

class Page extends Component {
    
    render() {
        const { isAuthenticate, information } = this.props;
        return (
            <div>
                Welcome to react boilerplate
                <table>
                    <tbody>
                        <tr>
                            <td>Name :</td>
                            <td>{ information.name}</td>
                        </tr>
                        <tr>
                            <td>Age : </td>
                            <td>{ information.age}</td>
                        </tr>
                        <tr>
                            <td>Sex</td>
                            <td>{ information.age}</td>
                        </tr>
                        <tr>
                            <td>Job</td>
                            <td>{ information.job}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Page;