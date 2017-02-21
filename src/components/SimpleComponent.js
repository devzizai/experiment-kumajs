import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: props.disabled,
    };
  }

  render() {
    return (
      <div>
        <button disabled={this.state.disabled} value={this.props.caption} />
      </div>
    );
  }
}

SimpleComponent.propTypes = {
  disabled: React.PropTypes.bool,
  caption: React.PropTypes.string,
};

SimpleComponent.defaultProps = {
  disabled: false,
  caption: 'Ok',
};

export default SimpleComponent;
