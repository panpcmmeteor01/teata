import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AsdaServiceBase } from "./base/asda.service.base";

@Injectable()
export class AsdaService extends AsdaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
