import { PhoneService } from './phone.service';
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { PhoneType } from "./phone.type";
import { AddPhoneInput } from './phone.input';

@Resolver(of => PhoneType)
export class PhoneResolver {

    constructor(private phoneService: PhoneService) {}

    @Query(returns => PhoneType)
    phone(@Args('id') id: number) : Promise<PhoneType> {
        return this.phoneService.getById(id);
    }

    @Query(returns => [PhoneType])
    getPhones() {
        return this.phoneService.getPhones();
    }

    @Mutation(returns => PhoneType)
    addPhone(@Args('addPhoneInput') addPhoneInput: AddPhoneInput, ) : Promise<PhoneType> {
        return this.phoneService.addPhone(addPhoneInput);
    }

    @Mutation(returns => PhoneType)
    updatePhone(@Args('id') id: number, @Args('addPhoneInput') addPhoneInput: AddPhoneInput ) : Promise<PhoneType> {
        return this.phoneService.updatePhone(id, addPhoneInput);
    }

    @Mutation(returns => Number!, {nullable: true})
    deletePhone(@Args('id') id: number) {
        this.phoneService.deletePhone(id);
    }

}