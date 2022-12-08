import { Schema } from 'mongoose';

export enum OrderStatus {
	NEW = 'NEW',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	CANCELED = 'CANCELED',
	REFUNDED = 'REFUNDED',
}