import React, {useEffect, useState} from 'react';
import {Container,Row, Col } from 'react-bootstrap';
import { dataFetcher } from '../../common/js/dataFetcher';
import styled from 'styled-components';
import Filters from '../molecule/filters/filters'
import CardWrapper from '../molecule/cardWrapper/cardWrapper'
import { ContextApiConsumer } from '../../config/contextApi';

const Main = props => {
    const Layout = styled.main`
        margin:80px 0;
    `;
    const [data, setData] = useState({});
    useEffect(() => {
        onLoadApiCall();
    }, []);
    const { updateContextData, cardData } = props;
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
            const response = res.data;
            setData(response);
            updateContextData({
                cardData: {name:'parul'},
            });
          } else {
            console.log('failed');
          }
        },
      ).catch((err) => {
        console.log('error', err);
    });
  });
  console.log('Data',data);
  console.log('cardData',cardData);
  return (
    <Layout >
        <Container >
            <Row> 
                <Col xs={4}><Filters/></Col>
                <Col xs={8}><CardWrapper item={data.results}/></Col>
            </Row>
        </Container>
    </Layout>
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