import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactResolver } from './contact.resolver';
import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.entity';
import { ContactImageResolver } from './image-upload/contact-image.resolver';

@Module({
    imports: [
        //ContactService
        TypeOrmModule.forFeature([
            Contact
        ])
    ],
    providers: [
        ContactResolver,
        ContactImageResolver,
        ContactService
    ]
})
export class ContactModule {}
