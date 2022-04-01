import "dotenv/config";
import fs from "fs/promises";

export class Options {
    public static async fromEnv(): Promise<Options> {
        return new Options(
            Number(process.env.PORT),
            process.env.LND_HOST,
            await fs.readFile(process.env.LND_READONLY_MACAROON_PATH),
            await fs.readFile(process.env.LND_CERT_PATH),
        );
    }

    constructor(
        readonly port: number,
        readonly lndHost: string,
        readonly lndReadonlyMacaroon: Buffer,
        readonly lndCert: Buffer,
    ) {}
}
