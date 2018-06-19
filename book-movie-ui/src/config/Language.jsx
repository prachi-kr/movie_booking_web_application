import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";


import { fetchAllLanguages } from "./configActions";
import { changeSelectedLanguageAndFetchMovies } from "../header/headerActions";
import { connect } from "react-redux";

const styles = {
  commonStyle: {
    fontSize: "15px",
    fontWeight: "300",
  }
  ,
  dropDownStyle: {
    backgroundColor: "#d9534f",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "300",
  },

  alignStyles:
  { textAlign: "right", paddingRight: "39px" }
};

class Language extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  componentDidMount() {
    this.props.fetchLanguagesFromDatabase();
  }


  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const languages = this.props.languages.languages;
    return (
      <div style={styles.alignStyles}>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret style={styles.dropDownStyle}>
            {this.props.filter.selectedLanguage.language ?
              this.props.filter.selectedLanguage.language.toUpperCase() : "LANGUAGES"
            }
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem key={"All"}
                          onClick={() => this.props.changeSelectedLanguage([])}
                          style={styles.commonStyle}>
              SELECT ALL
            </DropdownItem>
            {languages.map((lang) =>
              <DropdownItem key={lang.language_code}
                            onClick={() => this.props.changeSelectedLanguage(lang)}
                            style={styles.commonStyle}>
                {lang.language.toUpperCase()}
              </DropdownItem>)
            }
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

Language.defaultProps = {};


export default connect(
  (state) => ({
    languages: state.languageReducer,
    filter: state.filterReducer
  }),
  (dispatch) => ({
    fetchLanguagesFromDatabase: () => dispatch(fetchAllLanguages()),
    changeSelectedLanguage: (languageSelected) => { dispatch(changeSelectedLanguageAndFetchMovies(languageSelected));}
  }))(Language);

