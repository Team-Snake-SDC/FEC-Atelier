import React, { useState, useEffect } from 'react';
import ComparisonModal from './ComparisonModal.jsx';
import styled from 'styled-components';
import { AiOutlineStar } from '@react-icons/all-files/ai/AiOutlineStar';
import {
  RelatedCardGraphic, TextOnCard, ImageOnCard, SalePrice, PriceStruckthrough, RelatedActnBttn
} from './Assets/comparisonWidget.style.js';

const RelatedCard = function ({
  category, productName, price, image, salePrice, features, productId, setProductId, currentId
}) {
  const [showCompModal, setShowCompModal] = useState(false);

  const openCompModal = function () {
    setShowCompModal(!showCompModal);

  };

  return (
    <>
    {showCompModal ? (<ComparisonModal productName={productName} category={category} features={features} productId={productId} setProductId={setProductId} showCompModal={showCompModal} setShowCompModal={setShowCompModal} openCompModal={openCompModal} /> ): null}
    <RelatedCardGraphic data-testid="cardOne">
      <RelatedActnBttn onClick={openCompModal}/>
      <ImageOnCard onClick={() => {setProductId(currentId)}} image={image} />
      <TextOnCard>
        <p style={{color: "#F4F4F9"}}>
          {category}
          {' '}
          <br />
          {productName}
          {' '}
          <br />
          {salePrice ? (
            <div>
              {' '}
              <SalePrice>
                {' '}
                $
                {salePrice}
              </SalePrice>
              {' '}
              <PriceStruckthrough>
                {' '}
                $
                {price}
                {' '}
              </PriceStruckthrough>
            </div>
          ) : `$${ price}`}
        </p>
        <div>
          <AiOutlineStar />
          {' '}
          <AiOutlineStar />
          {' '}
          <AiOutlineStar />
          {' '}
          <AiOutlineStar />
          {' '}
          <AiOutlineStar />
        </div>
      </TextOnCard>
    </RelatedCardGraphic>
    </>
  );
};

export default RelatedCard;
