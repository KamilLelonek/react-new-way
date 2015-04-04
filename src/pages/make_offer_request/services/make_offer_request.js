import { postData } from "../../../common/request";

export default class MakeOfferRequestService {
  constructor(customerDetails, companyDetails, products, deliveryID) {
    this.customerDetails = customerDetails
    this.companyDetails  = companyDetails
    this.products        = products
    this.deliveryID      = deliveryID
  }

  call() {
    return postData("/offer_requests", this.jsonRequestBody())
  }

  jsonRequestBody() {
    return {
      customer_name:   this.customerDetails.name,
      customer_email:  this.customerDetails.email,
      delivery_id:     this.deliveryID,
      company_name:    this.companyDetails.name,
      company_phone:   this.companyDetails.phone,
      company_address: this.companyDetails.address,
      products:        this.products.map(product => {
        return {
          quantity:    product.quantity,
          category_id: product.category
        }
      })
    }
  }
}
