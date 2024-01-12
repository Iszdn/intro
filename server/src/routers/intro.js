import { Router } from 'express'
import { createIntro, delIntro, getAll, getiD } from '../controllers/intro.js'
const router = Router()

router.get('/',getAll)
router.get('/:id',getiD)
router.delete('/:id',delIntro)
router.post('/',createIntro)

export default router