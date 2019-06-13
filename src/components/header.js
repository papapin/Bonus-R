import React, { Component } from 'react';
import '../css/styles.css';





class Header extends Component {

    state = {
         
        keywords: ''
    }

    inputChange = (e)  => {
        //console.log(e.target.value);

        

       this.setState({
            
           keywords: e.target.value
       })
    }

    render () {       
       
        
        return <header >
            <div className="logo">Logo</div>
            <input type="text" onChange={this.inputChange} />
          
        </header >
    }   

}

    




export default Header;