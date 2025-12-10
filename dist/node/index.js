import { nodeEncoder } from "./NodeBasisEncoder.js";
export function encodeToKTX2(imageBuffer, options = {}) {
    if (!options.imageDecoder) {
        throw "imageDecoder is required in Node.js.";
    }
    globalThis.__KTX2_DEBUG__ = options.enableDebug ?? false;
    return nodeEncoder.encode(imageBuffer, options);
}
const basisEncoder = nodeEncoder;
export { basisEncoder };
