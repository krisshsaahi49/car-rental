"use client";
import Hero from '@/components/Home/Hero'
import SearchInput from '@/components/Home/SearchInput'
import CarsFiltersOption from '@/components/Home/CarsFiltersOption'
import CarsList from '@/components/Home/CarsList'
import { useEffect, useState } from 'react';
import { getCarsList } from '@/api'

export default function Home() {
  const [carsList, setCarsList] = useState<any>([])
  const [carsOrgList, setCarsOrgList] = useState<any>([])
  useEffect(() => {
    getCarList();
  }, [])

  const getCarList = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists)
  }

  const filterCarList = (brand: String) => {
    const filterList = carsOrgList.filter((item: any) => item.carBrand == brand);
    setCarsList(filterList);
  }

  const orderCarList = (order: any) => {
    const sortedData = [...carsOrgList].sort((a, b) => order == -1 ? a.price - b.price : b.price - a.price);
    setCarsList(sortedData)
  }

  return (
    <div className='p-5 sm:px-10 md:px-20'>
      <Hero />
      <SearchInput />
      <CarsFiltersOption carsList={carsOrgList}
        orderCarList={(value: String) => orderCarList(value)}
        setBrand={(value: String) => filterCarList(value)} />
      <CarsList carsList={carsList} />
    </div>
  )
}
