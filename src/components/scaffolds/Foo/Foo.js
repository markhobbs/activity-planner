import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  title: '',
  value: ''
};

const propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  star: PropTypes.string
};

class Foo extends React.Component {

  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (
      <div className="foo">
        {this.props.title ? <h1>{this.props.title}</h1> : null}
        {this.props.value ? <p>{this.props.value}</p> : null}
        {this.props.star ? <span class="icon-star">start</span> : null}
      </div>
    );
  }
}

Foo.propTypes = propTypes;
Foo.defaultProps = defaultProps;

export default Foo;