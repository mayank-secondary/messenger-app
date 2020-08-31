import React, { forwardRef, useEffect } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from '../Styles/MessageStyles';

const Message = forwardRef(({ userName, text, currentUserName }, ref) => {
    const classes = useStyles();
    const isOwner = currentUserName.toLowerCase() === userName.toLowerCase();

    useEffect(() => {
        document.getElementById("app__flipMove").scroll(0, 100000000000);
    }, []);

    return (
        <div ref={ref} className={isOwner ? classes.message__owner : classes.root}>
            {!isOwner && <div className={classes.message__username}>{userName} :</div>}
            <Card className={isOwner ? classes.message__user : classes.message__guest}>
                <CardContent>
                    <Typography variant="h5" component="h2">{text}</Typography>
                </CardContent>
            </Card>
        </div>
    )
});

export default Message
