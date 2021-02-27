import React, {Component} from 'react';

interface IPageHeaderProps {
    heading?: string;
}
   
class PageHeader extends Component<IPageHeaderProps> {
    render() {
        return(
            <h1 className="heading">{this.props.heading}</h1>
        );
    }
};

export default PageHeader;
