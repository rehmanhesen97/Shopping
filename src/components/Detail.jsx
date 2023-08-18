import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { product_list } from '../constants/products';
import { Button, Card, CardBody, CardText, CardTitle, Container, Row } from 'reactstrap';
import { AppContext } from '../context/AppContext';

function Detail() {
    const { card, count, addToCard, adRemoveCard } = useContext(AppContext)
    // console.log(card);   
    const { id } = useParams();
    console.log(id);


    const item = product_list.find((element) => element.id == id);
    const newCard = card.find((element) => element.id == id)

    const newCard2 = { ...newCard, item }

    return (


        <Container  >
            <Row className=' d-flex justify-content-center align-items-center'>




                <div
                    key={item.id}
                    className='col-md-6 m-4 text-center d-flex justify-content-center align-items-center'
                >
                    <Card>
                        <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                {item.title}
                            </CardTitle>
                            <CardText>
                                {
                                    item.old_price &&
                                    <del className='text-danger'>{item.old_price}</del>
                                }
                                {" "}
                                {
                                    <strong>{item.price}</strong>
                                }
                            </CardText>
                            <Button
                                onClick={() => adRemoveCard(item)}
                                className='btn-success'
                                style={{fontWeight:"bold", fontSize: "1.5rem"}}
                            >
                                -
                            </Button>

                            <span 
                            className='mx-3' 
                            style={{fontWeight:"bold", fontSize: "1.5rem"}}
                            >{
                                newCard2.count ?
                                    newCard2.count
                                    :
                                    0
                            }</span>


                            <Button
                                onClick={() => addToCard(item)}
                                className='btn-success'
                                style={{fontWeight:"bold", fontSize: "1.5rem"}}
                            >
                                +
                            </Button>

                        </CardBody>
                    </Card>
                </div>
            </Row>
        </Container>

    )
}

export default Detail