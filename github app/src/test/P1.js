import React, { Component } from 'react';
import PropTypes from 'prop-types'
function SelectLanguage ({ selectedLanguage, onSelect }) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className='languages'>
        {languages.map((lang) => (
          <li
            style={lang === selectedLanguage ? {color: '#d0021b'} : null}
            onClick={() => onSelect(lang)}
            key={lang}>
              {lang}
          </li>
        ))}
      </ul>
    )
  }
SelectLanguage.propTypes = {
    selectedLanguage : PropTypes.string.isRequired,
    onSelect : PropTypes.func.isRequired
}
class P0 extends Component {
state = {
    selectedLanguage : 'All'
}

componentDidMount(){
    this.updateLanguage(this.state.selectedLanguage)
}

updateLanguage=(lang)=>{
    this.setState({
        selectedLanguage:lang
    })
}

render(){
   
    return(
        <div>
        <SelectLanguage
    
    selectedLanguage ={this.state.selectedLanguage}
        onSelect = {this.updateLanguage}
        />
        </div>
    )
}


}
 
export default P0;