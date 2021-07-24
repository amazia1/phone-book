/// <reference types="node" />
import { Stream } from "stream";
export interface Upload {
    filename: string;
    mimetype: string;
    encoding: string;
    createReadStream: () => Stream;
}
