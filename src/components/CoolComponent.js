import React, { Component } from 'react';

class CoolComponent extends Component {
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

CoolComponent.propTypes = {
  disabled: React.PropTypes.bool,
  caption: React.PropTypes.string,
};

CoolComponent.defaultProps = {
  disabled: false,
  caption: 'Ok',
};

export default CoolComponent;
