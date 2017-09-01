import React, { Component } from 'react';

import SearchBox from './SearchBox';
import ResultList from './ResultList';
import Select from './Select';
import Option from './Option';

import styles from './SearchResults.css';

import workshopMock from '../data/workshop-mock.json';

function nameMatches({ name }, queryStr) {
  return name.match(new RegExp(queryStr, "i"));
}

function keywordMatches({ keywords }, queryStr) {
  const kws = queryStr.split(" ");
  return kws.filter(k => 
      keywords.find(_k => 
        _k.match(new RegExp(k, "i")))).length > 0;
}

function locationMatches({ location }, queryStr) {
  return location.match(new RegExp(queryStr, "i"));
}

function queryResults(queryStr) {
  return workshopMock.filter(w => 
      nameMatches(w, queryStr)    ||
      keywordMatches(w, queryStr) ||
      locationMatches(w, queryStr));
}

class SearchResults extends Component {
  constructor(props) {
    super();

    const queryStr = props.match.params.querystr;
    
    this.state = {
      queryStr,
      results: queryResults(queryStr)
    };
  }
  componentWillReceiveProps(props) {
    this.setState({ ...this.state, results: queryResults(this.state.queryStr) });
  }
  onQueryStrChange(e) {
    this.setState({ ...this.state, queryStr: e.target.value });
  }
  render() {
    const { queryStr, results } = this.state;
    
    return (
      <div className={styles.root}>
        <div className={styles.search}>
          <SearchBox value={queryStr} onChange={e => this.onQueryStrChange(e)} />
        </div>
        <div className={styles.sorting}>
          <Select className={styles["sorting-select"]}>
            <Option>Ordenar por Precio</Option>
            <Option>Ordenar por Puntaje</Option>
          </Select> 
        </div>
        <div className={styles.results}>
          <ResultList elementClass={styles["result-list"]} results={results} />
        </div>
      </div>
    );
  }
}

export default SearchResults;