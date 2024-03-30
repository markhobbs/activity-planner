import React, { Component, MouseEvent } from 'react';

enum STATUS {
  HOVERED = 'hovered',
  NORMAL = 'normal',
}

interface ILinkProps {
  page: string;
  children: React.ReactNode;
}

interface ILinkState {
  linkStatus: STATUS;
}

class Link extends Component<ILinkProps, ILinkState> {
  constructor(props: ILinkProps) {
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
        className={linkStatus}
        href={page || '#'}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
      </a>
    );
  }
}

export default Link;
