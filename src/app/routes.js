import home from './home/routes'
import introduction from './introduction/routes'
import fundamentals from './fundamentals/routes'
import api from './api/routes'

export default [...home, ...introduction, ...fundamentals, ...api]
