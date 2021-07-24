import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { GraphQLUpload } from "apollo-server-express";
import { createWriteStream } from 'fs';
import { join } from "path";
import { Upload } from "./upload";

@Resolver()
export class ContactImageResolver {

    constructor() {}

    @Mutation(() => Boolean)
    addContactPicture(@Args({name: 'image', type: () => GraphQLUpload})
    {
        createReadStream,
        filename
    }: Upload): Promise<boolean> {
        console.log(filename)
        return new Promise(async (resolve, reject) => 
            createReadStream()
                .pipe(createWriteStream(`./src/contact/image-upload/images/${filename}`))
                .on('finish', () => {
                    console.log(join(__dirname, '..', 'src/contact/image-upload/images'));
                    //console.log(`${__dirname}\\images\\${filename}`);
                    resolve(true);
                })
                .on('error', (error) => {
                    console.log(error);
                    reject(false); 
                })
        );
    }
}