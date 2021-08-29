import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';

class Addmission extends Component {
    render() {
        return (
            <div className="card">
                <h3>Fill The Form</h3>
                <div>
                    <label for="fname">First Name  </label> <input type="text" id="fname" /><br/>
                    
                </div>
                
            </div>
        );
    }
}

export default Addmission;