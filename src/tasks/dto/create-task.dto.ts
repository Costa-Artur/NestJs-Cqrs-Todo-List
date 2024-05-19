import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";


export class CreateTaskDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @ApiProperty()
    @AutoMap()
    description: string;

    constructor(description: string) {
        this.description = description;
    }
}