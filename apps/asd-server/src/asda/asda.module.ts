import { Module } from "@nestjs/common";
import { AsdaModuleBase } from "./base/asda.module.base";
import { AsdaService } from "./asda.service";
import { AsdaController } from "./asda.controller";
import { AsdaResolver } from "./asda.resolver";

@Module({
  imports: [AsdaModuleBase],
  controllers: [AsdaController],
  providers: [AsdaService, AsdaResolver],
  exports: [AsdaService],
})
export class AsdaModule {}
