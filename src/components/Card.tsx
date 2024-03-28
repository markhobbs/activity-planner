import React, { Component } from "react";
import Image from  './Image';
import Kit from './Kit';
import Rewards from './Rewards';
import CardActions from './CardActions';
import Stars from '@mui/icons-material/Stars';
import styled from 'styled-components';

interface ICardProps {
  item: any;
}

const Badge = styled.div`
  padding: 0 24px;
`
const CardContent = styled.div`
  padding: 0 24px;
  h3 {
    margin-top: 0;
    font-size: 2em;
  }
`

class Card extends Component<ICardProps> {
  render () {
    let featuredClass = this.props.item.featured ? " card--featured" : "";
    let completedlass = this.props.item.completed ?  " card--completed" : "";
    let fullClass = "card " + featuredClass + completedlass;

    return (
      <li key={this.props.item.id} className={fullClass}>
        <div className="card-image">                   
          <Image 
            src = {this.props.item.img} 
            alt = {this.props.item.title} 
          />

          <CardActions
            actionID = {this.props.item.id} 
            kit = {this.props.item.kit}
            completed = {this.props.item.completed} 
          />
        </div>

        <CardContent>
          <h3>
              {this.props.item.title} 
              &nbsp;
              <small>
                  {this.props.item.rep}
                  <sup> rep(s)</sup>
              </small>
          </h3>
          <p>
            {this.props.item.headline}
          </p> 
          { !this.props.item.kit || 
            <Kit items={this.props.item.kit} />
          }
        </CardContent>

        { !this.props.item.featured || 
          <Badge>
            <Stars style={{ color: "#a17f1a" }} />
          </Badge> 
        }

        { !this.props.item.rewards || <Rewards items={ this.props.item.rewards } /> }
    </li>
    );
  }
}

export default Card;