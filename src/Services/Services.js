import React from 'react'
import { Card, CardDeck, Col, Row } from 'react-bootstrap'
import { cardInfo } from './cardInfo'
import styled from 'styled-components'
import { FaPaw } from 'react-icons/fa'

const Styles = styled.div`

.row {
    font-family: 'Baloo 2', cursive;
    padding-top: 50px;
    padding-bottom: 50px;

}
  .card-text {
    color: #000;
    text-align:left;
    position: relative;
    z-index: -2;
    background-color: #fff;
    font-size: 1.1em;
    line-height: 2em;
  }
  .col {
      padding-top: 50px;
  }
  .brown{
color: #CB894C;
margin-right: 10px;
  }
 

 
  `

const Services = () => {
    const renderdCards = (cardInfo, index) => {
        return (
            <Styles>
                <Row key={index}>
                    <Col md={6}>
                        <Card.Img variant="top" src={cardInfo.image} /></Col>
                    <Col md={6} className="d-inline-flex flex-column">

                        <Card.Body>
                            <Card.Title><h3 className="font-weight-bold">{cardInfo.title}</h3></Card.Title>
                            <Card.Text>
                                <p>                <FaPaw className="brown" />   {cardInfo.text1}</p>
                                <p>                 <FaPaw className="brown" />    {cardInfo.text2}</p>
                                <p>                   <FaPaw className="brown" />  {cardInfo.text3}</p>
                                <p>                   <FaPaw className="brown" />   {cardInfo.text4}</p>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Kaina: {cardInfo.price}
                        </Card.Footer>
                    </Col>
                </Row>
            </Styles >
        )
    }

    return <CardDeck> {cardInfo.map(renderdCards)} </CardDeck>
}

export default Services




