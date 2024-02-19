'use client';

import { useParams } from 'next/navigation';
import Breadcrumb from '@/components/base/Breadcrumb';
import { allProductList, size } from '@/utils/variable';
import Image from 'next/image';
import { useState } from 'react';
import DynamicHtmlRender from '@/components/base/DynamicHtmlRender';
import cn from 'classnames';
import classProductDetail from '@/components/product/ProductDetail/product-detail.module.scss';
import SwipeScroll from '@/components/base/SwipeScroll';

const ProductDetail = () => {
  const params = useParams<{ identifier: string }>();
  const index = allProductList.findIndex(
    (datum) => datum.slug === params.identifier
  );
  const detailProduct = allProductList[index];
  const breadcrumb = [
    {
      name: 'SHOP',
      path: '/shop',
      id: 'shop',
      disabled: true,
    },
    {
      name: 'PRODUCT',
      path: '',
      id: 'product-detail',
      disabled: true,
    },
  ];
  const [seeMore, setSeeMore] = useState(false);
  const [seeSizeChart, setSeeSizeChart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  return (
    <section
      id="product-detail"
      className="container px-[20px] lg:px-[40px] pt-[40px]"
    >
      <div className="hidden lg:block lg:grid lg:grid-cols-[3fr,6fr,3fr]">
        <div>
          <div className="sticky top-[105px]">
            <div className="pb-[50px]">
              <Breadcrumb
                data={breadcrumb}
                replaceLastWithParams={{ paramsKey: 'identifier' }}
              />
            </div>
            <div className="sans title-2 mb-[24px]">{detailProduct.name}</div>
            <div className="sans text-[12px] leading-[18px] text-darkCharcoal mb-[1px]">
              {detailProduct.description}
            </div>
            {seeMore ? (
              <div
                className={cn({
                  [`${classProductDetail.content}`]: true,
                  'sans text-[12px] leading-[18px] text-darkCharcoal': true,
                })}
              >
                <DynamicHtmlRender
                  id={`more-content-${index}`}
                  html={detailProduct.moreContent}
                />
              </div>
            ) : (
              <></>
            )}
            <div
              className="sans text-[12px] leading-[18px] text-darkCharcoal mt-[16px] cursor-pointer"
              onClick={() => setSeeMore(!seeMore)}
            >{`VIEW ${seeMore ? 'LESS' : 'MORE'}`}</div>
          </div>
        </div>
        <div className="mx-10">
          {detailProduct.multipleImage.map((image, index) => {
            return (
              <Image
                className={cn({
                  'mr-[32px]': index + 1 !== detailProduct.multipleImage.length,
                  'aspect-square shrink-0': true,
                })}
                key={`image-${index}`}
                alt="ImageProduct"
                src={image}
                width={1200}
                height={1200}
                priority={true}
              />
            );
          })}
        </div>
        <div>
          <div className="sticky top-[180px]">
            <div className="sans title-2 mb-[8px]">{`IDR ${detailProduct.price}`}</div>
            <div className="flex items-center mb-[8px]">
              <div className="sans text-[12px] leading-[12px]">SIZES:</div>
              <div
                className="sans text-[12px] leading-[12px] ml-auto cursor-pointer"
                onClick={() => setSeeSizeChart(!seeSizeChart)}
              >
                {seeSizeChart ? 'BACK TO SIZE' : 'SIZE CHART'}
              </div>
            </div>
            {seeSizeChart ? (
              <div
                className={cn({
                  [`${classProductDetail.content}`]: true,
                  'sans text-[12px] leading-[18px] text-darkCharcoal': true,
                })}
              >
                <ul>
                  {size.chart.map((datum) => {
                    return <li key={datum}>{datum}</li>;
                  })}
                </ul>
                <div className="mt-[10px]">Notes:</div>
                <ul>
                  {size.notes.map((datum) => {
                    return <li key={datum}>{datum}</li>;
                  })}
                </ul>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-3 gap-[16px] mb-[8px]">
                  {size.list.map((datum: { value: string; label: string }) => {
                    return (
                      <button
                        key={datum.value}
                        onClick={() => setSelectedProduct(datum.value)}
                        disabled={
                          detailProduct.stock[
                            datum.value as keyof typeof detailProduct.stock
                          ] !== 0
                            ? false
                            : true
                        }
                        className={cn({
                          'border border-solid border-[#00000026] py-[9px] px-[20px] rounded-[2px] text-center sans allcaps-14':
                            true,
                          'border-[#000000]': selectedProduct === datum.value,
                          'opacity-25 cursor-not-allowed':
                            detailProduct.stock[
                              datum.value as keyof typeof detailProduct.stock
                            ] !== 0
                              ? false
                              : true,
                        })}
                      >
                        {datum.label}
                      </button>
                    );
                  })}
                </div>
                <div>
                  <button
                    disabled={selectedProduct === ''}
                    className={cn({
                      'bg-black text-white sans font-medium text-[16px] leading-[19px] py-[14px] px-[20px] text-center w-full mb-[8px]':
                        true,
                      'bg-[#d7d7d7] text-[#191919] cursor-not-allowed':
                        selectedProduct === '',
                    })}
                  >
                    Buy Now
                  </button>
                  <button
                    disabled={selectedProduct === ''}
                    className={cn({
                      'border border-solid border-black sans font-medium text-[16px] leading-[19px] py-[14px] px-[20px] text-center w-full mb-[8px]':
                        true,
                      'border border-[#d7d7d7] text-[#191919] cursor-not-allowed':
                        selectedProduct === '',
                    })}
                  >
                    Add to Bag
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="block lg:hidden md:grid md:grid-cols-2 gap-[32px]">
        <div>
          <div className="sticky top-[105px]">
            <SwipeScroll>
              {detailProduct.multipleImage.map((image, index) => {
                return (
                  <Image
                    className={cn({
                      'mr-[32px]':
                        index + 1 !== detailProduct.multipleImage.length,
                      'aspect-square shrink-0': true,
                    })}
                    key={`image-${index}`}
                    alt="ImageProduct"
                    src={image}
                    width={1200}
                    height={1200}
                    priority={true}
                  />
                );
              })}
            </SwipeScroll>
          </div>
        </div>
        <div>
          <div className="sans title-2 mb-[8px] mt-[32px] md:mt-0">{detailProduct.name}</div>
          <div className="sans title-2 mb-[16px]">{`IDR ${detailProduct.price}`}</div>
          <div className="flex items-center mb-[8px]">
            <div className="sans text-[12px] leading-[12px]">SIZES:</div>
            <div
              className="sans text-[12px] leading-[12px] ml-auto cursor-pointer"
              onClick={() => setSeeSizeChart(!seeSizeChart)}
            >
              {seeSizeChart ? 'BACK TO SIZE' : 'SIZE CHART'}
            </div>
          </div>
          {seeSizeChart ? (
            <div
              className={cn({
                [`${classProductDetail.content}`]: true,
                'sans text-[12px] leading-[18px] text-darkCharcoal': true,
              })}
            >
              <ul>
                {size.chart.map((datum) => {
                  return <li key={datum}>{datum}</li>;
                })}
              </ul>
              <div className="mt-[10px]">Notes:</div>
              <ul>
                {size.notes.map((datum) => {
                  return <li key={datum}>{datum}</li>;
                })}
              </ul>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-[16px] mb-[8px]">
                {size.list.map((datum: { value: string; label: string }) => {
                  return (
                    <button
                      key={datum.value}
                      onClick={() => setSelectedProduct(datum.value)}
                      disabled={
                        detailProduct.stock[
                          datum.value as keyof typeof detailProduct.stock
                        ] !== 0
                          ? false
                          : true
                      }
                      className={cn({
                        'border border-solid border-[#00000026] py-[9px] px-[20px] rounded-[2px] text-center sans allcaps-14':
                          true,
                        'border-[#000000]': selectedProduct === datum.value,
                        'opacity-25 cursor-not-allowed':
                          detailProduct.stock[
                            datum.value as keyof typeof detailProduct.stock
                          ] !== 0
                            ? false
                            : true,
                      })}
                    >
                      {datum.label}
                    </button>
                  );
                })}
              </div>
              <div className="fixed bottom-0 left-0 flex items-center w-full shadow-[0_1rem_3rem_rgba(0,0,0,.175)] p-[16px] z-[5] bg-white">
                <button
                  disabled={selectedProduct === ''}
                  className={cn({
                    'bg-black text-white sans font-medium text-[16px] leading-[19px] py-[14px] px-[20px] text-center w-full mr-[8px]':
                      true,
                    'bg-[#d7d7d7] text-[#191919] cursor-not-allowed':
                      selectedProduct === '',
                  })}
                >
                  Buy Now
                </button>
                <button
                  disabled={selectedProduct === ''}
                  className={cn({
                    'border border-solid border-black sans font-medium text-[16px] leading-[19px] py-[14px] px-[20px] text-center w-full ml-[8px]':
                      true,
                    'border border-[#d7d7d7] text-[#191919] cursor-not-allowed':
                      selectedProduct === '',
                  })}
                >
                  Add to Bag
                </button>
              </div>
            </>
          )}
          <div className="sans text-[12px] leading-[18px] text-darkCharcoal mb-[1px] mt-[12px] md:mt-0">
            {detailProduct.description}
          </div>
          {seeMore ? (
            <div
              className={cn({
                [`${classProductDetail.content}`]: true,
                'sans text-[12px] leading-[18px] text-darkCharcoal': true,
              })}
            >
              <DynamicHtmlRender
                id={`more-content-mobile-${index}`}
                html={detailProduct.moreContent}
              />
            </div>
          ) : (
            <></>
          )}
          <div
            className="sans text-[12px] leading-[18px] text-darkCharcoal mt-[16px] cursor-pointer"
            onClick={() => setSeeMore(!seeMore)}
          >{`VIEW ${seeMore ? 'LESS' : 'MORE'}`}</div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
