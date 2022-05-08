import { createOne, getAll, getOne, updateOne } from '../../utility/factory.js';
import hostelBookingModel from './hostelBooking.model.js';

export const getAllHostelBooking = getAll(hostelBookingModel);
export const getHostelBookingBuyId = getOne(hostelBookingModel);
export const createHostelBooking = createOne(hostelBookingModel);
export const updateHostelBooking = updateOne(hostelBookingModel);
