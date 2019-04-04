import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {AppBar,MuiThemeProvider ,List,ListItem,RaisedButton} from 'material-ui';

const styles = theme => ({
  card: {
    maxWidth: '80%',
    paddingLeft : '100'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const bookingHistoryDetails = [
    {
        bookingID : "1"
        ,path : "/history/1"
        ,exact : true
        ,bookingDate : "Apr 01 2019"
        ,pickupLocation : "DLF"
        ,dropLocation : "Guindy"
        ,deliveryCharge : "1000.00"
        ,typeOfVehicle : "Auto"
        ,deliveryType : "ELECTRONIC ITEMS"
        ,tentativeWeight : "100 Kg"
        ,deliveredDate : "Apr 01 2019"
        ,deliverPersonName : "Kumar"
        ,deliverPersonContactNo : "987998989"
        ,paymentMode : "Cash"
        ,vehicleType : "Four Wheeler"
        ,vehicleName : "Mahindra"
        ,vehicleRegNo : "TN 01 1234"
        ,main : () => <h2>History Details of Apr 01 2019</h2>
    },
    {
        bookingID : "2"
        ,path : "/history/2"
        ,exact : true
        ,bookingDate : "Mar 01 2019"
        ,pickupLocation : "Meenampakkam"
        ,dropLocation : "Tambaram"
        ,deliveryCharge : "1000.00"
        ,deliveryType : "ELECTRONIC ITEMS"
        ,tentativeWeight : "100 Kg"
        ,deliveredDate : "Mar 01 2019"
        ,deliverPersonName : "Kumar"
        ,deliverPersonContactNo : "987998989"
        ,paymentMode : "Cash"
        ,vehicleType : "Four Wheeler"
        ,vehicleName : "Mahindra"
        ,vehicleRegNo : "TN 01 1234"
        ,main : () => <h2>History Details of Mar 01 2019</h2>
    },
    {
       
        bookingID : "3"
        ,path : "/history/3"
        ,exact : true
        ,bookingDate : "Feb 01 2019"
        ,pickupLocation : "Egmore"
        ,dropLocation : "Tambaram"
        ,deliveryCharge : "1000.00"
        ,deliveryType : "ELECTRONIC ITEMS"
        ,tentativeWeight : "100 Kg"
        ,deliveredDate : "Mar 01 2019"
        ,deliverPersonName : "Kumar"
        ,deliverPersonContactNo : "987998989"
        ,paymentMode : "Cash"
        ,vehicleType : "Four Wheeler"
        ,vehicleName : "Mahindra"
        ,vehicleRegNo : "TN 01 1234"

    },
    {
        bookingID : "4"
        ,path : "/history/4"
        ,exact : true
        ,bookingDate : "Jan 01 2019"
        ,pickupLocation : "Pallavaram"
        ,dropLocation : "DLF"
        ,deliveryCharge : "1000.00"
        ,deliveryType : "ELECTRONIC ITEMS"
        ,tentativeWeight : "100 Kg"
        ,deliveredDate : "Mar 01 2019"
        ,deliverPersonName : "Kumar"
        ,deliverPersonContactNo : "987998989"
        ,paymentMode : "Cash"
        ,vehicleType : "Four Wheeler"
        ,vehicleName : "Mahindra"
        ,vehicleRegNo : "TN 01 1234"
    }
];


class BookingHistory extends React.Component {
  state = { 
      expanded: false,
      activeIndex : null
    };

 

  handleExpandClick = (anything) =>{
      console.log(anything.bookingID)
    //   expanded = true;
    //   console.log(e.target)
    this.setState(state => ({ expanded: !state.expanded }));
    // this.showCollapse(anything.bookingID)
  };
//    showCollapse = (id)=>{
//        console.log("TargetID==> "+event.target.bookingID)
//       //if(id == event.)
//    }

  render() {
    const { classes } = this.props;

    return (
        <div>

        {bookingHistoryDetails.map((anything, index)=>(
            <Card className={classes.card + " historyCard "}>
                <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                    BH
                    </Avatar>
                }
                title= {anything.bookingDate} 
                // subheader="September 14, 2016"
                />

                <CardContent>
                <Typography component="p"> {'Pickup Location : '} {anything.pickupLocation} </Typography>
                <Typography component="p"> {'Drop Location : '} {anything.dropLocation} </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>

                <IconButton
                    className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={()=>this.handleExpandClick(anything)}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
                </CardActions>
                {/* {!state.id &&} */}
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                        <Typography component="p">
                            Delivery Type : {anything.deliveryType}
                            <br/>
                            Tentative Weight : {anything.tentativeWeight}
                            <br/>
                            Delivered Date :   {anything.deliveredDate}
                            <br/>
                            Deliver Person Name : {anything.deliverPersonName}
                            <br/>
                            Deliver Person ContactNo : {anything.deliverPersonContactNo}
                            <br/>
                            Payment Mode : {anything.paymentMode}
                            <br/>
                            Vehicle Type : {anything.vehicleType}
                            <br/>
                            Vehicle Name : {anything.vehicleName}
                            <br/>
                            Vehicle Reg.No : {anything.vehicleRegNo}
                        
                        </Typography>
                      {/* <List>  
                        <ListItem primaryText="Delivery Type" secondaryText={anything.deliveryType} />
                        <ListItem primaryText="Tentative Weight" secondaryText={anything.tentativeWeight} />
                        <ListItem primaryText="Delivered Date" secondaryText={anything.deliveredDate} />
                        <ListItem primaryText="Deliver Person Name" secondaryText={anything.deliverPersonName} />
                        <ListItem primaryText="Deliver Person ContactNo" secondaryText={anything.deliverPersonContactNo} />
                        <ListItem primaryText="Payment Mode" secondaryText={anything.paymentMode} />
                        <ListItem primaryText="Vehicle Type" secondaryText= {anything.vehicleType} />
                        <ListItem primaryText="Vehicle Name" secondaryText= {anything.vehicleName} />
                        <ListItem primaryText="Vehicle Reg.No" secondaryText= {anything.vehicleRegNo} />
                    </List> */}
                    
                </CardContent>
                </Collapse>
            </Card>
        ))}
      </div>
    );
  }
}

BookingHistory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookingHistory);
