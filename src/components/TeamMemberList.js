import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

const TeamMemberList = () => {
  const [userData, setUserData] = useState([])
  // console.log(userData)

  useEffect(() => {
    getAPI()
  }, [])

  const getAPI = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const response = await data.json()
    setUserData(response)
    // console.log("response", response)
  }
  return (
    <Grid>
      {userData && userData.map((data) => {
        return <Card sx={{ maxWidth: 445 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               Name: {data.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
               Email: {data.email}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Phone: {data.phone}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      })}

    </Grid>
  )
}

export default TeamMemberList