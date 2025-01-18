import { RouterType } from '../../router'
import { SubmitRegistration } from './api/submitRegistration'
import { RetrieveUserData } from './api/retrieveUserData'
import { UpdateUserData } from './api/updateUserData'

export default function registerAuthRoutes(router: RouterType) {
  router.post('/api/auth/submit-registration', SubmitRegistration)
  router.get('/api/auth/retrieve-user-data', RetrieveUserData)
  router.post('/api/auth/update-user-data', UpdateUserData)
}
