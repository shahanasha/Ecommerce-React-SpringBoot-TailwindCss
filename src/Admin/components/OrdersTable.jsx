import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../State/store'
import { confirmOrders, deleteOrders, deliverOrders, getOrders, shipOrders } from '../../State/Admin/Order/Actionn';
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const OrdersTable = () => {

  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event,index) => {
    const neweAnchorElArray=[...anchorEl];
    neweAnchorElArray[index]=event.currentTarget;
    setAnchorEl(neweAnchorElArray);
  };

  const handleClose = (index) => {
    const neweAnchorElArray=[...anchorEl];
    neweAnchorElArray[index]=null;
    setAnchorEl(neweAnchorElArray );
  };

  const dispatch = useDispatch();

  const { adminOrder } = useSelector(store => store)

  useEffect(() => {
    dispatch(getOrders())
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered,adminOrder.deletedOrder])

  console.log("admin orders ", adminOrder)

  const handleShippedOrder = (orderId) => {
    dispatch(shipOrders(orderId))
    handleClose()
  }

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrders(orderId))
    handleClose()
  }

  const handleDeliverOrder = (orderId) => {
    dispatch(deliverOrders(orderId))
    handleClose()
  }

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrders(orderId))
  }


  return (
    <div className='p-10'>
      <Card className='mt-2 '>
        <CardHeader title='All products' />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item, index) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="" className=''>
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) =>
                        <Avatar src={orderItem.product.imgUrl}></Avatar>)}
                    </AvatarGroup>
                  </TableCell>

                  <TableCell align="left"  >
                    {item.orderItems.map((orderItem) => <p> {orderItem.product.title}</p>)}
                    {/* {item.title} */}
                  </TableCell>
                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left"> <span className={`text-white px-5 py-2 rounded-full
                  ${item.orderStatus === "CONFIRMED" ? "bg-[#369236]" :
                      item.orderStatus === "SHIPPED" ? "bg-[#4141ff]" :
                        item.orderStatus === "PLACED" ? "bg-[#02B290]" :
                          item.orderStatus === "PENDING" ? "bg-[gray]" :
                            "bg-[#025720]"}`}>{item.orderStatus}</span>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      id="basic-button"
                      aria-haspopup="true"
                      onClick={(event)=>handleClick(event,index)}
                      aria-controls={`basic-menu-${item.id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={()=>handleClose(index)}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmedOrder(item.id)}>Confirmed</MenuItem>
                      <MenuItem onClick={() => handleShippedOrder(item.id)}>Shipped</MenuItem>
                      <MenuItem onClick={() => handleDeliverOrder(item.id)}>Delivered</MenuItem>
                    </Menu>
                  </TableCell>

                  <TableCell align="left">
                    <Button
                      onClick={() => handleDeleteOrder(item.id)}
                      variant='outlined'
                      
                      >
                            Delete
                    </Button>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default OrdersTable