import React, { Component } from "react";
import Image from  './Image';
import Kit from './Kit';
import Rewards from './Rewards';
import Actions from './Actions';
import Stars from '@mui/icons-material/Stars';
import styled from 'styled-components';


const Badge = styled.div`
  padding: 0 24px;
`
const CardItem = styled.li`
  margin-bottom: 12px;
  img {
    width:100%
  }
`
const CardItemContent = styled.div`
  padding: 0 24px;
  h3 {
    margin-top: 24px;
    font-size: 2em;
  }
`

interface CardProps {
  item: Item;
}
interface Item {
  completed: boolean;
  featured: string;
  headline:  string;
  id: number;
  img: string;
  kit: string;
  rep: string;
  rewards: Reward[];
  title:  string;
}

interface Reward {
  0: string;
  1: number;
}

class Card extends Component<CardProps> {
  render () {
    const {completed, featured, headline, id, img, kit, rep, rewards, title} = this.props.item;
    return (
      <CardItem key={id}>               
        <Image 
          src={img} 
          alt={title} />
        
        <CardItemContent>
          <h3>
            {title} <small>{rep} <sup>rep(s)</sup></small>
          </h3>
          <p>{headline}</p> 
          {!kit || <Kit items={kit} />}
          {!rewards || <Rewards items={rewards} />}
        </CardItemContent>
       
        {!featured || <Badge><Stars style={{color: "#a17f1a"}} /></Badge>}
        
        <Actions
          actionID={id} 
          kit={kit}
          completed={completed} />
    </CardItem>);
    }
}

export default Card;
