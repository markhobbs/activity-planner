import React from 'react';

// Define possible states for the link
const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

// Props interface for the Link component
interface ILinkProps {
  page: string;
  children: React.ReactNode;
}

// State interface for the Link component
interface ILinkState {
  linkStatus: string;
}

class Link extends React.Component<ILinkProps, ILinkState> {
  constructor(props: ILinkProps) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      linkStatus: STATUS.NORMAL,
    };
  }

  // Event handler for mouse enter
  _onMouseEnter() {
    this.setState({ linkStatus: STATUS.HOVERED });
  }

  // Event handler for mouse leave
  _onMouseLeave() {
    this.setState({ linkStatus: STATUS.NORMAL });
  }

  render() {
    const { page, children } = this.props;
    const { linkStatus } = this.state;

    return (
      <a 
        className={linkStatus} 
        href={page || '#'} 
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {children}
      </a>
    );
  }
}

export default Link;
