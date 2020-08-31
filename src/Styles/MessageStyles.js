import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    width: 'fit-content',
    margin: 10,
  },
  message__owner: {
    width: 'fit-content',
    margin: '10px 10px 10px auto',
    textAlign: 'right !important',
  },
  message__user: {
    backgroundColor: '#0b81ff !important',
    color: 'white'
  },
  message__guest: {
    backgroundColor: "rgba(0, 0, 0, 0.07) !important"
  },
  message__username: {
    textAlign: 'left',
    margin: '5px 10px',
    textTransform: 'capitalize',
    color: 'darkgray',
  }
});