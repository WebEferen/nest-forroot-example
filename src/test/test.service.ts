import { Inject, Injectable } from "@nestjs/common";
import { PROVIDER_KEY, TestModuleOptions } from "./test.module";

@Injectable()
export class TestService {
    constructor(@Inject(PROVIDER_KEY) private readonly options: TestModuleOptions) {}

    getValues() {
        return this.options;
    }

}