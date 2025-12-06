import * as graphql from "@nestjs/graphql";
import { AsdaResolverBase } from "./base/asda.resolver.base";
import { Asda } from "./base/Asda";
import { AsdaService } from "./asda.service";

@graphql.Resolver(() => Asda)
export class AsdaResolver extends AsdaResolverBase {
  constructor(protected readonly service: AsdaService) {
    super(service);
  }
}
