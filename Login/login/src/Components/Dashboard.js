import React, { Component } from 'react';
import './Login.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="receipt">
                <table class="nest-table">
                    <tr>
                        <th>
                            <h3> RECEIPT </h3>
                            <h1>NAV NALANDA COMPUTER TRAINING INSTITUTE</h1>
                            <h3>Reg. Gov. of Bihar Under Society Reg. Act. 21, 1860 || Affiliated by : Gyan Ganga Seva Sansthan</h3>
                            <div className="dark-header">
                                <h2>Noorsari, Nalanda, Bihar - 803113</h2>
                            </div>
                            <div className="container">
                                <p className="p1">Website: www.navnalanda.org</p> <p className="p2">E-mail: udaykumar600@gmail.com</p>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div className="container">
                                <div className="col-md-12 p1">
                                    <label for="no">SNo : </label>
                                    <input type="number" id="inputdef" /><br/>
                                    <label for="name">Name : </label>
                                    <input type="text" id="inputdef" /><br/>
                                    <label for="course">Courses : </label>
                                    <input type="text" id="inputdef" /><br />
                                    <label for="address">Address : </label>
                                    <input type="text" id="inputdef" /><br/>
                                    <label for="dues">Total Dues : </label>
                                    <input type="number" id="inputdef" />
                                </div>
                                <div className="col-md-12 p2">
                                    <label for="date">Date : </label>
                                    <input type="date" id="inputdef" /><br />
                                    <label for="roolnumber">Roll No : </label>
                                    <input type="number" id="inputdef" /><br/>
                                    <label for="batch">Batch : </label>
                                    <input type="text" id="inputdef" /><br/>
                                    <label for="month">Month : </label>
                                    <input type="date" id="inputdef" /><br/>
                                    <label for="dues">Dues Date : </label>
                                    <input type="text" id="inputdef" />
                                </div>
                            </div>
                        </th>
                    </tr>
                </table>
                <table className="nest-table">
                    <thead>
                        <tr className="nest-tr"  >
                            <th className="item"  rowspan="2">Qnty.</th>
                            <th className="despt" rowspan="2">DESCRIPTION</th>
                            <th className="qnty"  rowspan="2">Rate</th>
                            <th className="qnty"  colspan="2">AMOUNT</th>
                        </tr>
                        
                        <tr>
                            <th>Rs.</th>
                            <th>P.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="blank-td"></td>
                            <td className="blank-td"></td>
                            <td className="blank-td"></td>
                            <td className="blank-td"></td>
                            <td className="blank-td"></td>
                        </tr>    
                    </tbody>
                </table>

                <table class="nest-table">
                    <tr>
                        <th>
                            <div className="paragraph">
                                    <p className="p1">
                                        <label for="ruppes">Rupees in words: </label>
                                        <input type="text" id="ruppes" /><br/>
                                    </p>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div className="paragraph">
                                    <p className="p1">
                                        <label for="fee">Note: Tution Fee Not Refundable </label>
                                        <br/>
                                    </p>
                                    <p className="p2">
                                        <label for="sign">Receiver Signature </label>   
                                    </p>
                            </div>
                        </th>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Dashboard;