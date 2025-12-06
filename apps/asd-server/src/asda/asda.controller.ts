import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AsdaService } from "./asda.service";
import { AsdaControllerBase } from "./base/asda.controller.base";

@swagger.ApiTags("asdas")
@common.Controller("asdas")
export class AsdaController extends AsdaControllerBase {
  constructor(protected readonly service: AsdaService) {
    super(service);
  }
}
