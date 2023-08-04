import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import {
  Pharmacy,
  HealthMartOrderPayload,
  CarePlusOrderPayload,
  QuickCareOrderPayload,
  PharmacyType,
} from './pharmacy.def';

@Controller()
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Get('pharmacy')
  getPharmacies(): Pharmacy[] {
    return this.pharmacyService.getPharmacies();
  }

  @Post('healthmart/orders')
  createHealthMartOrder(
    @Body() createOrderDto: HealthMartOrderPayload,
  ): HealthMartOrderPayload {
    return this.pharmacyService.createOrder<HealthMartOrderPayload>(
      createOrderDto,
      PharmacyType.healthMart,
    );
  }

  @Get('healthmart/orders')
  getHealthMartOrders(): HealthMartOrderPayload[] {
    return this.pharmacyService.getAllOrders(PharmacyType.healthMart);
  }

  @Get('healthmart/orders/:orderId')
  getHealthMartOrderById(
    @Param('orderId') orderId: string,
  ): HealthMartOrderPayload | null {
    return this.pharmacyService.getOrderById<HealthMartOrderPayload>(
      orderId,
      PharmacyType.healthMart,
    );
  }

  @Post('careplus/orders')
  createCarePlusOrder(
    @Body() createOrderDto: CarePlusOrderPayload,
  ): CarePlusOrderPayload {
    return this.pharmacyService.createOrder<CarePlusOrderPayload>(
      createOrderDto,
      PharmacyType.carePlus,
    );
  }

  @Get('careplus/orders')
  getCarePlusOrders(): CarePlusOrderPayload[] {
    return this.pharmacyService.getAllOrders(PharmacyType.carePlus);
  }

  @Get('careplus/orders/:orderId')
  getCarePlusOrderById(
    @Param('orderId') orderId: string,
  ): CarePlusOrderPayload | null {
    return this.pharmacyService.getOrderById<CarePlusOrderPayload>(
      orderId,
      PharmacyType.carePlus,
    );
  }

  @Post('quickcare/orders')
  createQuickCareOrder(
    @Body() createOrderDto: QuickCareOrderPayload,
  ): QuickCareOrderPayload {
    return this.pharmacyService.createOrder<QuickCareOrderPayload>(
      createOrderDto,
      PharmacyType.quickCare,
    );
  }

  @Get('quickcare/orders')
  getQuickCareOrders(): QuickCareOrderPayload[] {
    return this.pharmacyService.getAllOrders(PharmacyType.quickCare);
  }

  @Get('quickcare/orders/:orderId')
  getQuickCareOrderById(
    @Param('orderId') orderId: string,
  ): QuickCareOrderPayload | null {
    return this.pharmacyService.getOrderById(orderId, PharmacyType.quickCare);
  }
}
