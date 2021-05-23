import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

const Styles = styled.div`
.footer {
    height: 100px;
    width: 100%;
    padding: 0;
    margin:0;
    align-items: center;
    justify-content:center;
    text-align:center;
    font-family: 'Baloo 2', cursive;
    background-color: #d9d9d9;
    background-image: linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%);
}`

export const Footer = () => {
    return (
        <Styles>
            <Row className="footer d-flex">
                <Col>@2021</Col>
            </Row>
        </Styles>
    )
}
