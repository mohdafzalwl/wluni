import React, { Component } from 'react';


class P0 extends Component {
state = {
    selectedLanguage : 'All'
}

updateLanguage=(lang)=>{
    this.setState({
        selectedLanguage:lang
    })
}

render(){
    const languages = ['All' , 'JavaScript','Java','ruby']
    return(
        <div>
          {languages.map((lang)=>{
              return <li
                      style={ lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}
                      onClick={()=>this.updateLanguage(lang)}
              >{lang}</li>
          })}
        </div>
    )
}


}
 
export default P0;