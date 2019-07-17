import React from 'react';
import styled from 'styled-components';
import DropDownHeader from './DropDownHeader.jsx';

const DropDownList = styled.ul`
  display: flex;
  z-index: 1;
  flex-direction: column;
  padding: 0;
  margin: 0px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, .1);
  visibility: ${(props) => {
    return props.dropDownOpen ? 'visible' : 'hidden';
  }}
`;

const DropDownItem = styled.li`
  display: block;
  z-index: 2;
  transition-duration: 0.2s;
  height: 40px;
  width: 100%;
  padding-top: 1em;
  background: white;
  text-align: center;

  :hover {
    cursor: pointer;
    background: rgba(250, 250, 250, 1);
  }
`;

class SizeDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownOpen: false,
      selectedSize: '0',
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.handleDropDownSubmit = this.handleDropDownSubmit.bind(this);
  }

  toggleDropDown() {
    this.setState({ dropDownOpen: !this.state.dropDownOpen})
  }

  handleDropDownSubmit(event) {
    // console.log(event.target)
    this.setState({
      selectedSize: event.target.value,
      dropDownOpen: false,
    })
  }

  render() {
    return (
      <div className={this.props.className}>
        <DropDownHeader selectedSize={this.state.selectedSize} toggleDropDown={this.toggleDropDown}/>
        <DropDownList dropDownOpen={this.state.dropDownOpen}>
          {this.props.sizes.map((size) => {
            return <DropDownItem key={size} value={size} onClick={this.handleDropDownSubmit}>{size}</DropDownItem>
          })}
        </DropDownList>
      </div>
    );
  }
};

export default styled(SizeDropDown)`
  // border: 2px solid green;
  width: 100%;
`;

// export default SizeDropDown;