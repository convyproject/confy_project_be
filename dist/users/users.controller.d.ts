import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createProfileDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    findAll(page: number, limit: number): Promise<{
        data: import("./entities/user.entity").User[];
        hasNextPage: boolean;
    }>;
    findOne(id: string): Promise<import("./entities/user.entity").User>;
    update(id: number, updateProfileDto: UpdateUserDto): Promise<import("./entities/user.entity").User>;
    remove(id: number): Promise<void>;
}
