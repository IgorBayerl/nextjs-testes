import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Slider from "react-slick";

// Components
import Subtitle from '../../Subtitle';

// Style
import {BoxContent , SmallContainerRight, BigContainerRight, SmallContainerLeft, BigContainerLeft} from './styles';

export default function ShareIt() {
  

  return (
    <BoxContent>
      <div className="limit">
        <Col xs={12}>
          <Row className="justify-content-center">
            <Col xs={12} lg={11}>
              
              <Row className="justify-content-center align-items-center  mt-lg-5">
                
                <Col xs={12} md={12} lg={6} xl={6} className="d-flex flex-column justify-content-between">
                  
                  <BigContainerLeft className="d-none d-lg-block">
                    
                  </BigContainerLeft>
                  <SmallContainerLeft>
                    <Col xs="auto align-middle  mt-5">
                      <Subtitle className="text-center">
                        <span className="text-center color-secondary ">Compartilhe a conta</span>
                      </Subtitle>
                      <p className="name color-secondary text-size-md text-center text-sm-left ">
                      Acabaram-se os problemas na hora de pagar. Com yoomy, além de dividir cada momento com seus amigos e familiares, você pode dividir também a conta
                      </p>
                        
                    </Col>
                  </SmallContainerLeft>
                  <BigContainerLeft className="d-none d-lg-block">
                    <Col className="justify-content-center align-items-center  ml-3">
                      <img src="/images/pratoYoomyShare.png" alt="Mc" className="img-fluid" />
                    </Col>
                  </BigContainerLeft>
                </Col>
                <Col xs={12} md={12} lg={6} xl={6} className="">
                  <SmallContainerRight className="d-none d-lg-block">
                    <Col className="d-none d-lg-block">
                      <img src="/images/padronagem-promotions.png" alt="Mc" className="img-fluid" />
                    </Col>
                  </SmallContainerRight>
                  <BigContainerRight className="d-flex justify-content-between">
                    <Col  xs={12} lg={6} className="d-none d-lg-block justify-content-center align-items-center ">
                      <Row className="align-middle h-100 justify-content-center">
                        
                        <img src="/images/1.png" alt="Mc" className="" />
                      </Row>
                    </Col>
                    <Col xs={12} lg={6} className="  justify-content-center align-items-center ">
                      <Row className="align-middle h-50 justify-content-center">
                        <img src="/images/3.png" alt="Mc" className="" />
                      </Row>
                      <Row className="align-middle h-50 justify-content-center">
                        <img src="/images/4.png" alt="Mc" className="" />
                      </Row>
                        
                    </Col>
                      <Col className="d-block d-lg-none justify-content-center align-items-center  ml-3">
                        <img src="/images/pratoYoomyShare.png" alt="Mc" className="img-fluid" />
                      </Col>
                  </BigContainerRight>
                  <SmallContainerRight className="d-none d-lg-block">
                    
                  </SmallContainerRight>
                 
                
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </div>
    </BoxContent>
  )
}
