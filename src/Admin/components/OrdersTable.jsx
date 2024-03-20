import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../State/Admin/Order/Action';
import { store } from '../../State/store'


const OrdersTable = () => {
  const dispatch = useDispatch();

  const {adminOrder} = useSelector(store=>store)

  useEffect(()=>{
    dispatch(getOrders())
  },[])

  console.log("admin orders ", adminOrder)
  return (
    <div>OrdersTable</div>
  )
}

export default OrdersTable