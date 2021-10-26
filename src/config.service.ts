import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigService {

    get config() {
        return {
            a: 1,
            b: '2'
        };
    }

}