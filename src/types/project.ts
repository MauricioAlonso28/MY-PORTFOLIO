export interface ProjectInterface {
  name: string
  date: string
  description: string
  image?: string
  deploy_url?: string
  github_url?: string
  key_features?: Array<string>
  stack: Array<string>
}