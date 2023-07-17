/* ref: https://mui.com/system/getting-started/the-sx-prop/ */


// //import { makeStyles } from '@material-ui/core/styles';//

// //export default makeStyles((theme) => ({//

export const formStyle = {
  root: {
    '& .MuiTextField-root': {
      margin: 1, // margin: theme.spacing(1) ref: https://mui.com/system/getting-started/the-sx-prop/#spacing
    },
  },
  paper: {
    padding: 2, // padding: theme.spacing(2) ref: https://mui.com/system/getting-started/the-sx-prop/#spacing
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: '10px', // 10 will be multiplied by 8px (default spacing), so use ' px' to ensure 10px
  },
};