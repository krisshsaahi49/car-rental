import React, { useEffect, useState } from 'react'

function CarsFiltersOption({ carsList, setBrand, orderCarList }: any) {

  const [brandList, setBrandList] = useState<any>();
  const BrandSet = new Set()

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList])
  const filterCarList = () => {
    carsList.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });
    console.log(BrandSet)
    setBrandList(Array.from(BrandSet));
  }
  return (
    <div className='mt-10 flex items-center justify-between'>
      <div id="cars-catalog">
        <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
        <h2>Explore our cars you might like</h2>
      </div>
      <div className='flex gap-5'>
        <select className="select select-bordered w-full max-w-xs" defaultValue="" onChange={(e) => orderCarList(e.target.value)}>
          <option disabled value="">Price</option>
          <option value="-1">Low to High</option>
          <option value="1">High to Low</option>
        </select>

        <select className="select select-bordered w-full md:block max-w-xs hidden" defaultValue="" onChange={(e) => setBrand(e.target.value)}>
          <option disabled value="">Manufacturer</option>
          {brandList && brandList.map((brand: string, index: number) => (
            <option key={index} value={brand}>{brand}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default CarsFiltersOption