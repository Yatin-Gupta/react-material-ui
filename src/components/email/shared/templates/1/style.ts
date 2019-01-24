export default (theme: any) => ({
  emailBody: {
    backgroundColor: '#80cbc4',
    padding: '14px 0'
  },
  emailContainer: {
    border: 0,
    borderSpacing: 0,
    padding: 0,
    width: 600
  },
  emailHeader: {
    '&>tr>td': {
      fontWeight: 'bold',
      padding: '10px 0'
    },
    backgroundColor: '#4db6ac'
  },
  emailTable: {
    '& tr>td:nth-of-type(1)': {
      textAlign: 'center',
      verticalAlign: 'top'
    },
    border: 0,
    borderSpacing: 0,
    height: '100%',
    padding: 0,
    width: '100%'
  }
});
