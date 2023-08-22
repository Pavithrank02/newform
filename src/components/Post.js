import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

const Post = () => {
  const [userData, setUserData] = useState([])
  console.log(userData)
  let reqData = userData.splice(50)
  // console.log(reqData)

  useEffect(() => {
    getAPI()
  }, [])

  const getAPI = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const response = await data.json()
    setUserData(response)
    // console.log("response", response)
  }
  return (
    <Card sx={{ maxWidth: 90 + "%" }}>
      <Grid>
        {userData && userData.map((data) => {
          return <Card sx={{ minWidth: 245, marginBottom: 4 }} >
            <CardActionArea sx={{width: 90 + "%"}}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Number:{data.id}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Title:{data.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Body:{data.body}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        })}
      </Grid>
    </Card>
  )
}

export default Post