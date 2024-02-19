'use client';

import { allProductList } from '@/utils/variable';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Breadcrumb = ({
  data = [{ name: '', path: '', id: '', disabled: false }],
  replaceLastWithParams = { paramsKey: '' },
}: {
  data?: { name: string; path: string; id: string; disabled: boolean }[];
  replaceLastWithParams: { paramsKey: string };
}) => {
  const pathname = usePathname();
  const params = useParams<{ identifier: string }>();
  const [breadcrumb, setBreadcrumb] =
    useState<{ name: string; path: string; id: string; disabled: boolean }[]>(
      data
    );
  const index = allProductList.findIndex(
    (datum) => datum.slug === params.identifier
  );
  const detailProduct = allProductList[index];

  useEffect(() => {
    if (replaceLastWithParams) {
      setBreadcrumb((prevData) => {
        const newData = JSON.parse(JSON.stringify(prevData));
        newData[newData.length - 1] = {
          name: detailProduct.name,
          path: pathname,
          id: params.identifier,
          disabled: true,
        };
        return newData;
      });
    }
  }, [replaceLastWithParams, detailProduct.name, params.identifier, pathname]);
  
  return (
    data && (
      <div className="flex items-center">
        <div>
          <a href="/" className="text-[10px] leading-5 text-darkCharcoal">
            HOME
          </a>
        </div>
        {pathname !== '/' ? (
          <>
            <div className="text-[10px] text-darkCharcoal mx-[8px] mt-[4px]">
              /
            </div>
            {breadcrumb.map((datum, index) => {
              return (
                <div key={datum.id} className="flex items-center">
                  <div>
                    <a
                      href={!datum.disabled ? datum.path : ''}
                      className="text-[10px] leading-5 text-darkCharcoal"
                    >
                      {datum.name}
                    </a>
                  </div>
                  {index + 1 !== breadcrumb.length && (
                    <div className="text-[10px] text-darkCharcoal mx-[8px] mt-[4px]">
                      /
                    </div>
                  )}
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    )
  );
};

export default Breadcrumb;
