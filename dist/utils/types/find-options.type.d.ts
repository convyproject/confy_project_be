import { EntityCondition } from './entity-condition.type';
export declare type FindOptions<T> = {
    where: EntityCondition<T>[] | EntityCondition<T>;
};
