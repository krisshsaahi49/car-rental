import request, { gql } from "graphql-request";

const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clvf7einl0blh07usfqhar855/master";
export const getCarsList = async () => {
  const query = gql`
    query CarLists {
        carLists(first : 100) {
          carAvg
          createdAt
          id
          name
          price
          publishedAt
          updatedAt
          seat
          image {
            url
          }
          carType
          carBrand
        }
      }      
    `

  const result = await request(MASTER_URL, query);
  return result;
}

export const getStoreLocations = async () => {
  const query = gql`
    query storeLocation {
      storesLocations {
        address
      }
    }  
    `
  const result = await request(MASTER_URL, query);
  return result;
}


export const createBooking = async (formValue) => {
  const mutationQuery = gql`
    mutation MyMutation {
      createBooking(
        data:  {userName: "`+ formValue.userName + `", 
        pickUpDate: "`+ formValue.pickUpDate + `", 
        pickUpTime: "`+ formValue.pickUpTime + `", 
        dropOffDate: "`+ formValue.dropOffDate + `", 
        dropOffTime: "`+ formValue.dropOffTime + `", 
        contactNumber: "`+ formValue.contactNumber + `", 
        carId: {connect: 
          {id: "`+ formValue.carId + `"}}}
      ) {
        id
      }
    }
    `

  const result = await request(MASTER_URL, mutationQuery);
  return result;
}

export const createBuynow = async (formValue) => {
  const mutationQuery = gql`
        mutation MyMutation {
            createBuynow(
                data: {
                    address: "${formValue.address}",
                    mobile: "${formValue.mobile}",
                    userName: "${formValue.userName}",
                    email: "${formValue.email}"
                }
            ) {
                id
            }
        }
    `;

  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

export const createSellCar = async (formValue) => {
  const mutationQuery = gql`
    mutation MyMutation {
        createSellCar(
          data: {
            condition: "${formValue.condition}", 
            make: "${formValue.make}", 
            mileage: ${formValue.mileage}, 
            model: "${formValue.model}", 
            price: ${formValue.price}, 
            year: ${formValue.year},
            appointment: "${formValue.appointment}",
            image: {create: {fileName: "${formValue.image}"}}
          },
        ) {
          id
        }
      }
    `;

  const result = await request(MASTER_URL, mutationQuery);
  return result;
};