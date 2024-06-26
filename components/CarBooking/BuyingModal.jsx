import CarCard from '../Home/CarCard'
import BuyingForm from './BuyingForm'
import PropTypes from 'prop-types';

function BuyingModal({car}) {

  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
    <div className='border-b-[1px] pb-2 '>
    <h3 className=" text-[30px] font-light text-gray-400">
        Buy A Car Now!</h3>
    </div>
    <div className='grid grid-cols-1
    md:grid-cols-2 p-5'>
        <div>
            <CarCard car={car} />
        </div>
        <div>
           <BuyingForm car={car}/>
        </div>
    </div>
   
    </form>
  )
}

BuyingModal.propTypes = {
  car: PropTypes.object.isRequired
};

export default BuyingModal