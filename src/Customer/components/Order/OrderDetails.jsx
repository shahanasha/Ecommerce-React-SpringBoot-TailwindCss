import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useParams } from 'react-router-dom'

const OrderDetails = () => {
    // const { orderId } = useParams();

  return (
    <div className='px-5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-5' >Delivery Address</h1>
         <AddressCard/>

        </div>

        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>

          <Grid conatainer className='space-y-5'>

              {[1, 1, 1, 1].map((item) =>
                  <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: "space-between" }}>

                      <Grid item sx={6}>
                          <div className='flex items-center space-x-4'>
                              <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/j/a/r/l-poch521835-peter-england-original-imag7jg47g7cxhg3-bb.jpeg?q=70" alt="" />

                              <div className='space-y-1 ml-5'>
                                  <p className='font-semibold'>Men Woven Design Pure Cotton Straight Kurta</p>
                                  <p className='space-x-5'><span>Color : Grey</span> <span>Size : M</span></p>
                                  <p>Seller: iSeller</p>
                                  <p>1055</p>
                              </div>
                          </div>

                      </Grid>

                      <Grid item >

                          <Box sx={{ color: deepPurple[500] }}>

                              <StarBorderIcon sx={{ fontSize: "2rem" }} />
                              <span>Rate & Review Product</span>
                          </Box>

                      </Grid>

                  </Grid>)}

          </Grid>
    </div>
  )
}

export default OrderDetails