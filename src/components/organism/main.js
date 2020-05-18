import React, {useEffect} from 'react';
import {Container,Row, Col } from 'react-bootstrap';
import { dataFetcher } from '../../common/js/dataFetcher';
import Filters from '../molecule/filters/filters'
import CardWrapper from '../molecule/cardWrapper/cardWrapper'
import { ContextApiConsumer } from '../../config/contextApi';

const Main = props => {
    useEffect(() => {
        onLoadApiCall();
    }, []);
    const { updateContextData } = props;
    /**
   * On load call
   * @Method : calling 'https://rickandmortyapi.com/api/character/ '  api
   * Printing data on load
   * passing props to child
   */
  
  const onLoadApiCall = () => new Promise((resolve, reject) => {
      const URL =  'https://rickandmortyapi.com/api/character/ ';
      dataFetcher(`${URL}`).then(
        res => {
          if (res.status === 200) {
            const response = res.data.results;
            updateContextData({
                cardData: response,
            });
          } else {
            console.log('failed');
          }
        },
      ).catch((err) => {
        console.log('error', err);
    });
  });
  return (
    <div >
        <Container fluid>
            <Row> 
                <Col xs={12} lg={3}><Filters/></Col>
                <Col xs={12} lg={9}><CardWrapper/></Col>
            </Row>
        </Container>
    </div>
  );
};

const ConnectedMain = props => (
    <ContextApiConsumer>
      {({ updateContextData, cardData}) => (
        <Main
          {...props}
          updateContextData={updateContextData}
          cardData={cardData}
        />
      )}
    </ContextApiConsumer>
  );
  
  export default ConnectedMain;
  export { Main as MainVanilla };