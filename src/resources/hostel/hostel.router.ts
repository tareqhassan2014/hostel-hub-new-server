import { Router } from 'express';
import {
    createHostel,
    getHostelBuyAdminId,
    getHostelBuyId,
    updateHostel,
} from './hostel.controller.js';

const router = Router({ mergeParams: true });

router.route('/').post(createHostel).get(getHostelBuyAdminId);
router.route('/:id').get(getHostelBuyId).patch(updateHostel);

export default router;
