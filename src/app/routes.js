import home from './home/routes'
import introduction from './introduction/routes'
import fundamentals from './fundamentals/routes'
import api from './api/routes'
import applications from './applications/routes'

export default [...home, ...introduction, ...fundamentals, ...api, ...applications]
