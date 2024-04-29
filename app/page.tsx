"use client";
import Hero from '@/components/Home/Hero'
import SearchInput from '@/components/Home/SearchInput'
import CarsFiltersOption from '@/components/Home/CarsFiltersOption'
import CarsList from '@/components/Home/CarsList'
import ToastMsg from '@/components/ToastMsg'
import { useEffect, useState } from 'react';
import { getCarsList } from '@/api'
import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";
import SellCarsPage from '@/components/Home/SellCarsPage'
import Contact from '@/components/Contact'

export default function Home() {
  const [carsList, setCarsList] = useState<any>([])
  const [carsOrgList, setCarsOrgList] = useState<any>([])
  const [showToastMsg, setShowToastMsg] = useState<boolean>(false);
  useEffect(() => {
    getCarList();
  }, [])

  const getCarList = async () => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists)
  }

  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter((item: any) => item.carBrand == brand);
    setCarsList(filterList);
  }

  const orderCarList = (order: any) => {
    const sortedData = [...carsOrgList].sort((a, b) => order == -1 ? a.price - b.price : b.price - a.price);
    setCarsList(sortedData)
  }

  useEffect(() => {
    if (showToastMsg) {
      setTimeout(function () {
        setShowToastMsg(false)
      }, 4000);
    }
  }, [showToastMsg])

  return (
    <div className='p-5 sm:px-10 md:px-20'>
      <BookCreatedFlagContext.Provider value={{ showToastMsg, setShowToastMsg }}>
        <Hero />
        {/* <SearchInput /> */}
        <CarsFiltersOption carsList={carsOrgList}
          orderCarList={(value: string) => orderCarList(value)}
          setBrand={(value: string) => filterCarList(value)} />
        <CarsList carsList={carsList} />
        <SellCarsPage />
        <Contact />
        {showToastMsg ? <ToastMsg msg={'Booking Created Successfully!'} /> : null}
      </BookCreatedFlagContext.Provider>
    </div>
  )
}
