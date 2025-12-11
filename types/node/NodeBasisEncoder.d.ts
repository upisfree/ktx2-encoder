import { CubeBufferData, IBasisEncoder, IBasisModule, IEncodeOptions } from "../type.js";
declare class NodeBasisEncoder {
    basis: IBasisModule;
    encoder: IBasisEncoder;
    constructor();
    init(): Promise<IBasisModule>;
    encode(bufferOrBufferArray: Uint8Array | CubeBufferData, options?: Partial<IEncodeOptions>): Promise<Buffer>;
}
export declare const nodeEncoder: NodeBasisEncoder;
export {};
