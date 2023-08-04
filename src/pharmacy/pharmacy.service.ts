import { Injectable } from '@nestjs/common';
import {
  Pharmacy,
  HealthMartOrderPayload,
  CarePlusOrderPayload,
  QuickCareOrderPayload,
  PharmacyType,
} from './pharmacy.def';
import {
  CAREPLUS_ORDERS,
  PHARMACIES,
  QUICKCARE_ORDERS,
  HEALTHMART_ORDERS,
} from './pharmacy.models';

@Injectable()
export class PharmacyService {
  private readonly orders: (HealthMartOrderPayload | CarePlusOrderPayload)[] =
    [];

  getPharmacies(): Pharmacy[] {
    return PHARMACIES;
  }

  createOrder<
    T extends
      | HealthMartOrderPayload
      | CarePlusOrderPayload
      | QuickCareOrderPayload,
  >(createOrderDto: T, type: PharmacyType): T {
    const order = {
      healthMart: () => {
        const healthMartOrder: HealthMartOrderPayload = {
          healthMartId: Date.now().toString(),
          ...(createOrderDto as HealthMartOrderPayload),
        };
        HEALTHMART_ORDERS.push(healthMartOrder);
        return healthMartOrder as T;
      },
      carePlus: () => {
        const carePlusOrder: CarePlusOrderPayload = {
          carePlusId: Date.now().toString(),
          ...(createOrderDto as CarePlusOrderPayload),
        };
        CAREPLUS_ORDERS.push(carePlusOrder);
        return carePlusOrder as T;
      },
      quickCare: () => {
        const quickCareOrder: QuickCareOrderPayload = {
          quickCareId: Date.now().toString(),
          ...(createOrderDto as QuickCareOrderPayload),
        };
        QUICKCARE_ORDERS.push(quickCareOrder);
        return quickCareOrder as T;
      },
    };

    return order[type]();
  }

  getOrderById<
    T extends
      | HealthMartOrderPayload
      | CarePlusOrderPayload
      | QuickCareOrderPayload,
  >(orderId: string, type: PharmacyType): T | null {
    const order = {
      healthMart: () =>
        HEALTHMART_ORDERS.find(
          (order) => order.healthMartId === orderId,
        ) as T | null,
      carePlus: () =>
        CAREPLUS_ORDERS.find(
          (order) => order.carePlusId === orderId,
        ) as T | null,
      quickCare: () =>
        QUICKCARE_ORDERS.find(
          (order) => order.quickCareId === orderId,
        ) as T | null,
    };

    return order[type]();
  }

  getAllOrders<
    T extends
      | HealthMartOrderPayload
      | CarePlusOrderPayload
      | QuickCareOrderPayload,
  >(type: PharmacyType): T[] {
    const allOrders = {
      healthMart: () => HEALTHMART_ORDERS as T[],
      carePlus: () => CAREPLUS_ORDERS as T[],
      quickCare: () => QUICKCARE_ORDERS as T[],
    };

    return allOrders[type]();
  }
}
