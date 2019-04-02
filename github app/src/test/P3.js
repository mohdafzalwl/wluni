import React, { Component } from 'react';
import PropTypes from 'prop-types'
import fetchPopularRepos from './utils/api'

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


  function RepoGrid (props) {
    const {repos} = props
    return (
      <ul className='popular-list'>
        {repos.map(({ name, stargazers_count, owner, html_url }, index) => (
          <li key={name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={owner.avatar_url}
                  alt={'Avatar for ' + owner.login}
                />
              </li>
              <li><a href={html_url}>{name}</a></li>
              <li>@{owner.login}</li>
              <li>{stargazers_count} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    )
  }
  
  RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired,
  }

SelectLanguage.propTypes = {
    selectedLanguage : PropTypes.string.isRequired,
    onSelect : PropTypes.func.isRequired
}

class P0 extends React.Component {
    state = {
        selectedLanguage: 'All',
        repos: null,
      };
  componentDidMount=()=> {
      this.updateLanguage(this.state.selectedLanguage)
    }
  updateLanguage=(lang)=> {
  console.log('up here inthe update', this)
    this.setState(function () {
      return {
         selectedLanguage: lang,
        repos: null
        }
      });
   fetchPopularRepos(lang)
       .then(function (repos) {
          console.log('down here int the fetch part',this)
          this.setState(function () {
            return {
              repos: repos
            }
          });
        }.bind(this));
    }
      render() {
      return (
        <div>
   <SelectLanguage
     selectedLanguage={this.state.selectedLanguage}
       onSelect={this.updateLanguage} />
     {!this.state.repos
      ? <p>time taking to load api from github</p>
       : <RepoGrid repos={this.state.repos} />}
        </div>
      )
    }
    
  }
  
 
export default P0;