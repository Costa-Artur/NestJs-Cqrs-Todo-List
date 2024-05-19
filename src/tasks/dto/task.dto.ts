import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";

export class TaskDto {
    @ApiProperty()
    @AutoMap()
    description: string;

    @ApiProperty()
    @AutoMap()
    completed: boolean;

    @ApiProperty()
    @AutoMap()
    createdAt: Date;

    @ApiProperty()
    @AutoMap()
    updatedAt: Date;
}