import { Upload } from "./upload";
export declare class ContactImageResolver {
    constructor();
    addContactPicture({ createReadStream, filename }: Upload): Promise<boolean>;
}
