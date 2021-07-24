import { PhoneResolver } from './phone.resolver';
import { Phone } from './phone.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhoneService } from './phone.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Phone
        ])
    ],
    providers: [
        PhoneResolver,
        PhoneService
    ]
})
export class PhoneModule {}
