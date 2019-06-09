import Activity from './Activity'
import Organization from './Organization'

export interface Circle {
  name: string
  activityType: Activity
  description: string
  organizationType: Organization,
  tags: string[]
}
export default Circle
