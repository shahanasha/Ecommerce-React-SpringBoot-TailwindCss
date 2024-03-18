import { Button, Card, CardContent, Typography } from '@mui/material'
import { height, positions, styled } from '@mui/system'
import React from 'react'

const TriangleImg=styled("img")({
  right:0,
  bottom:0,
  height:170,
  position:"absolute"

})

const TrophyImg=styled("img")({
  right:36,
  bottom:20,
  height:98,
  position:"absolute",
  backgroundColor:"#2B2B52"
})

const Achievement = () => {
  return (
    <Card className='' sx={{position:"relative", bgcolor:"#242B2E", color:"white"}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}}>
              shop with ishop
            </Typography>
            <Typography variant='body2'>Congratulations 🥳 </Typography>
            <Typography variant='h5' sx={{my:3.1}}> 420.8k </Typography>

            <Button size='small' variant='contained'>View Sales</Button>
            <TriangleImg  src=''></TriangleImg>
            <TrophyImg src="https://cdn4.vectorstock.com/i/1000x1000/72/33/golden-glowing-trophy-cup-on-a-dark-blue-vector-28407233.jpghttps://www.shutterstock.com/shutterstock/photos/1477980572/display_1500/stock-vector-winner-s-trophy-icon-the-golden-trophy-vector-is-a-symbol-of-victory-in-a-sports-event-1477980572.jpg"/>
          </CardContent>      
    </Card>
  )
}  

export default Achievement