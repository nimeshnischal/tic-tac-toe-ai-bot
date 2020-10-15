import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 60,
      height: 40,
      padding: 2,
      margin: theme.spacing(2),
    },
    switchBase: {
      padding: 3,
      '&$checked': {
        transform: 'translateX(20px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#3be8e0de',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '2px solid #fff',
      },
    },
    thumb: {
      width: 34,
      height: 34,
    },
    track: {
      borderRadius: 30,
      backgroundColor: 'rgb(184, 184, 184)',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });
  
  export default IOSSwitch;