/**
 * Zero-Dependency Ambient Node.js Type Declarations
 */

declare var process: {
  argv: string[];
  env: Record<string, string | undefined>;
  version: string;
  exit(code?: number): never;
};

declare module 'node:fs' {
  export function existsSync(p: string): boolean;
  export function readFileSync(p: string, encoding: BufferEncoding): string;
  export function writeFileSync(p: string, data: string, encoding?: BufferEncoding): void;
  export function appendFileSync(p: string, data: string, encoding?: BufferEncoding): void;
  export function copyFileSync(src: string, dest: string): void;
  export function mkdirSync(p: string, options?: { recursive?: boolean }): void;
  export function readdirSync(p: string, options: { withFileTypes: true }): Array<{
    name: string;
    isDirectory(): boolean;
    isFile(): boolean;
  }>;
  export function readdirSync(p: string): string[];
  export function statSync(p: string): { isFile(): boolean; isDirectory(): boolean };
  export function createReadStream(p: string): { pipe(dest: unknown): void };
  const fs: {
    existsSync: typeof existsSync;
    readFileSync: typeof readFileSync;
    writeFileSync: typeof writeFileSync;
    appendFileSync: typeof appendFileSync;
    copyFileSync: typeof copyFileSync;
    mkdirSync: typeof mkdirSync;
    readdirSync: typeof readdirSync;
    statSync: typeof statSync;
    createReadStream: typeof createReadStream;
  };
  export default fs;
}

declare module 'node:path' {
  export function resolve(...paths: string[]): string;
  export function join(...paths: string[]): string;
  export function dirname(p: string): string;
  export function basename(p: string, ext?: string): string;
  export function extname(p: string): string;
  const path: {
    resolve: typeof resolve;
    join: typeof join;
    dirname: typeof dirname;
    basename: typeof basename;
    extname: typeof extname;
  };
  export default path;
}

declare module 'node:http' {
  export interface IncomingMessage {
    url?: string;
    method?: string;
    on(event: 'data', listener: (chunk: string) => void): void;
    on(event: 'end', listener: () => void): void;
  }
  export interface ServerResponse {
    writeHead(statusCode: number, headers?: Record<string, string>): void;
    end(data?: string): void;
  }
  export function createServer(
    requestListener: (req: IncomingMessage, res: ServerResponse) => void
  ): {
    listen(port: number, callback?: () => void): void;
  };
  const http: {
    createServer: typeof createServer;
  };
  export default http;
}

declare module 'node:url' {
  export function fileURLToPath(url: string): string;
}
