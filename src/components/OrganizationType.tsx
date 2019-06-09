import React from 'react';
import Organization from '../interfaces/Organization'
import TableCell from '@material-ui/core/TableCell';

interface Props {
  type: Organization
};
export default (props: Props) => {
  switch (props.type) {
    case Organization.Certificated:
      return <TableCell>課外活動団体</TableCell>
    case Organization.Uncetificated:
      return <TableCell>一般学生団体</TableCell>
    case Organization.Unrecognized:
      return <TableCell>その他</TableCell>
    default:
      return <TableCell>不明</TableCell>
  }
}
