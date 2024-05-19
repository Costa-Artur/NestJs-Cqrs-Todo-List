import { Mapper, createMap } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { TaskEntity } from "../entities/task.entity";
import { TaskDto } from "../dto/task.dto";

@Injectable()
export class TaskProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile() {
        return (mapper) => {
            createMap(mapper, TaskEntity, TaskDto);
        }
    }
}