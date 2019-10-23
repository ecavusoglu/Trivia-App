import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/question.png'

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: 'Login',
            count: [],
            loading: false
        };
    }

    render () {
      return (
          <div className="d-flex align-middle border-bottom" style={headerStyle}>
            <div className="float-left p-2">
                <Link to={``}><img src={logo} alt="Logo" style={{height: 80, paddingLeft: '1rem'}}/></Link>
            </div>
          </div>
      );
    }
};

const headerStyle = {
    background: '#ebf1fd',
    display: 'flex'
  }
