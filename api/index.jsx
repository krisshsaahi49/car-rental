import request, { gql } from "graphql-request";

const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clvf7einl0blh07usfqhar855/master";
export const getCarsList = async () => {
    const query = gql`
    query CarLists {
        carLists {
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
