import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Countup from 'react-countup';
import './Card.css'





export default function MediaCard({value,label, color}) {


 

  return (
   
      <div>
 <Card className={color}>
         
          <CardActionArea>
         
           
            <CardContent>
              <Typography gutterBottom variant="p" component="p">
                {label}
              </Typography>
              
              <Typography gutterBottom variant="h5" component="p">
                <Countup
                end={value}
                start={0}
                duration={5}

                />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
        
          </CardActions>
          

        </Card>
      
    </div>
  );
}