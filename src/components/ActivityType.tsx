import React from 'react';
import Activity from '../interfaces/Activity'
import TableCell from '@material-ui/core/TableCell';

interface Props {
  type: Activity
};
export default (props: Props) => {
  switch (props.type) {
    case Activity.Art:
      return <TableCell>芸術系</TableCell>
    case Activity.Athletic:
      return <TableCell>体育系</TableCell>
    case Activity.Cultural:
      return <TableCell>文化系</TableCell>
    default:
      return <TableCell>不明</TableCell>
  }
}
