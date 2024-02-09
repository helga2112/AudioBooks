import { ROLES } from "types/commonTypes"

export interface UserModel {
  id: number
  name: string
  secondName: string 
  role: ROLES
}