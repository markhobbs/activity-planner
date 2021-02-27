import React,{ Component } from "react";
/* Components Icons */
import Image from  './Image';
import Kit from './Kit';
import Rewards from './Rewards';
import CardActions from './CardActions';
/* MaterialUI Icons */
import StarsIcon from '@material-ui/icons/Stars';

interface ICardProps {
  item?: any;
  src?: string;
  alt?: string;
}

class Card extends Component<ICardProps> {
  
  render () {
    // Build Modifiers if required
    let featuredClass = this.props.item.featured ? " card--featured" : "";
    let completedlass = this.props.item.completed ?  " card--completed" : "";
    let fullClass = "card " + featuredClass + completedlass;

    return (
      <li key={this.props.item.id} className={fullClass}>
        
        <div className="card-image">                   
          <Image src = {this.props.item.img} 
            alt = {this.props.item.title} 
          />
          <CardActions
            actionID = {this.props.item.id} 
            kit = {this.props.item.kit}
            completed = {this.props.item.completed} 
          />
        </div>

        <div className="card-content">
          <div className="card-title">
              {this.props.item.title} 
              <small>
                  {this.props.item.rep}
                  <sup>rep(s)</sup>
              </small>
          </div>
          <p>{this.props.item.headline}</p> 
          { !this.props.item.kit || <Kit items={this.props.item.kit} /> }
        </div>

        { !this.props.item.featured || <div className="card-badge"><StarsIcon style={{ color: "#a17f1a" }} /></div> }
        { !this.props.item.rewards || <Rewards items={ this.props.item.rewards } /> }
    </li>
    );
  }
}

export default Card;
