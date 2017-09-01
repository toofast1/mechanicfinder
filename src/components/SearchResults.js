import React, { Component } from 'react';

import SearchBox from './SearchBox';
import ResultList from './ResultList';
import Select from './Select';
import Option from './Option';

import styles from './SearchResults.css';

import workshopMock from '../data/workshop-mock.json';

const SORTING_OPTIONS = {
  PRICE: { text: 'Ordenar por Precio', sortingFn: sortByPrice },
  SCORE: { text: 'Ordenar por Puntaje', sortingFn: sortByScore }
};

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

function sortByPrice(results = []) {
  return results.sort((a, b) => {
    if (a.highPrice < b.highPrice)
      return -1;
    else if (a.highPrice > b.highPrice)
      return 1;

      return 0;
  });
}

function sortByScore(results = []) {
  return results.sort((a, b) => {
    if (a.userScore < b.userScore)
      return 1;
    else if (a.userScore > b.userScore)
      return -1;

      return 0;
  });
}

class SearchResults extends Component {
  constructor(props) {
    super();

    const queryStr = props.match.params.querystr;
    
    this.state = {
      queryStr,
      results: sortByPrice(queryResults(queryStr)),
      selectedSort: 'PRICE'
    };
  }
  componentWillReceiveProps(props) {
    this.setState({ ...this.state, results: queryResults(this.state.queryStr) });
  }
  onQueryStrChange(e) {
    this.setState({ ...this.state, queryStr: e.target.value });
  }
  onSortingSelectChange(e) {
    const selectedSort = e.target.value;
    const results = SORTING_OPTIONS[selectedSort].sortingFn([ ...this.state.results ]);

    this.setState({ ...this.state, results, selectedSort });
  }
  render() {
    const { queryStr, results, selectedSort } = this.state;
    const sortingOptions = Object.keys(SORTING_OPTIONS);
    
    return (
      <div className={styles.root}>
        <div className={styles.search}>
          <SearchBox value={queryStr} onChange={e => this.onQueryStrChange(e)} />
        </div>
        <div className={styles.sorting}>
          <Select className={styles["sorting-select"]} value={selectedSort} 
                  onChange={this.onSortingSelectChange.bind(this)}>
            {sortingOptions.map((so, i) => <Option key={i} value={so}>{SORTING_OPTIONS[so].text}</Option>)}
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