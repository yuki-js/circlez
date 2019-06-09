import React from 'react';
import Circle from '../interfaces/Circle';
import ActivityType from './ActivityType'
import OrganizationType from './OrganizationType'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
interface Props {

}
interface State {
  data: Circle[]
}
export default class CircleTable extends React.Component<Props, State> {

  constructor(props: any) {
    super(props)
    this.getJSON()
    this.state = {
      data: []
    }
  }

  async getJSON() {
    const result: Circle[] = await fetch("./data.json").then(r => r.json())
    this.setState({
      data: result
    })

  }

  render() {
    return <Table>
      <TableHead>
        <TableRow>
          <TableCell>名前</TableCell>
          <TableCell>活動種別</TableCell>
          <TableCell>団体種別</TableCell>
          <TableCell>説明</TableCell>
          <TableCell>タグ</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {this.state.data.map((v: Circle) => (
          <TableRow key={v.name}>
            <TableCell>{v.name}</TableCell>
            <ActivityType type={v.activityType} />
            <OrganizationType type={v.organizationType} />
            <TableCell>{v.description}</TableCell>
            <TableCell>{v.tags.map((tag: string) => (
              <Chip label={tag} />
            ))}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  }

}
