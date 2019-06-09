export enum Activity {
  Art = "art",
  Athletic = "athletic",
  Cultural = "cultural"
}

export enum Organization {
  Certificated = "certificated",
  Uncetificated = "uncertificated",
  Unrecognized = "unrecognized"
}

export interface Circle {
  name: string
  activityType: Activity
  description: string
  organizationType: Organization,
  tags: string[]
}

export default {}
