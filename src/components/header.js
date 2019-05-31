import React, { Component } from 'react';
import '../css/styles.css';





class Header extends Component {


    inputChange(e) {
        console.log(e.target.value);
        console.log('hey');
    }

    render () {        
        
        return <header>
            <div className="logo">Logo</div>
            <input type="text" onChange={ (e) =>  this.inputChange(e) } />
        </header >
    }   

}

    




export default Header;