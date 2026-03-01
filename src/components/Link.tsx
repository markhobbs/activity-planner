import React, { Component } from 'react';


enum STATUS {
  HOVERED = 'hovered',
  NORMAL = 'normal',
}

interface LinkProps {
  page: string;
  children: React.ReactNode;
}

interface LinkState {
  linkStatus: STATUS;
}

class Link extends Component<LinkProps, LinkState> {
  constructor(props: LinkProps) {
    super(props);
    this.state = {
      linkStatus: STATUS.NORMAL,
    };
  }

  handleMouseEnter = () => {
    this.setState({ linkStatus: STATUS.HOVERED });
  };

  handleMouseLeave = () => {
    this.setState({ linkStatus: STATUS.NORMAL });
  };

  render() {
    const { page, children } = this.props;
    const { linkStatus } = this.state;
    return (
      <a
        className={ linkStatus }
        href={ page || '#' }
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }>
        { children }
      </a>
    );
  }
}

export default Link;
