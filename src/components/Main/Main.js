import React,{useContext} from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'
import useStyles from './styles'
import Form from './Form/Form'
import List from './List/List'
import { ExpenseTrackerContext } from '../../context/context'
import InfoCard from '../InfoCard'
const Main = () => {
    const classes = useStyles()
    const {balance}=useContext(ExpenseTrackerContext)
    return (
        <Card className={classes.root}>

            <CardHeader title="Expense Tracker" subheader="Powered by Speechly"></CardHeader>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance: ${balance}</Typography>
                <Typography variant="subtitle1" style={{ lineheight: "1.2em", marginTop: "10px" }}>
                    <InfoCard/>
                </Typography>
                <Divider />
               <Form/>
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}></Grid>
                    <List/>
                </Grid>

            </CardContent>
        </Card>
    )
}

export default Main
