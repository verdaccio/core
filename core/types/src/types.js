/* @flow */

declare interface IUploadTarball extends stream$PassThrough {
  abort(): void;
  done(): void;
}

declare interface IReadTarball extends stream$PassThrough {
  abort(): void;
}

declare type Callback = Function;

declare type StorageList = Array<string>;

declare type LocalStorage = {
  list: StorageList;
  secret: string;
}

declare type Dist = {
  integrity?: string;
  shasum: string;
  tarball: string;
}

declare type Author = {
  name: string;
  email: string;
}

declare type Version = {
  name: string;
  version: string;
  devDependencies: string;
  directories: any;
  dist: Dist;
  author: string;
  homemage: string;
  license: string;
  readme: string;
  readmeFileName: string;
  description: string;
  bin: string;
  bugs: any;
  repository: string;
  homepage: string;
  dist: Dist;
  contributors: Array<string>;
  keywords: string | Array<string>;
  _npmUser: Author;
  _hasShrinkwrap: boolean;
};

declare type Logger = {
  child: (conf: any) => any;
  debug: (conf: any, template?: mixed) => void;
  error: (conf: any, template?: mixed) => void;
  http: (conf: any, template?: mixed) => void;
  trace: (conf: any, template?: mixed) => void;
  info: (conf: any, template?: mixed) => void;
}

declare type Versions = {
  [key: string]: Version;
}

declare type DistFile = {
  url: string;
  sha: string;
  registry?: string;
}

declare type MergeTags = {
  [key: string]: string;
}

declare type DistFiles = {
  [key: string]: DistFile;
}

declare type AttachMents = {
  [key: string]: Version;
}

declare type GenericBody = {
  [key: string]: string;
}

declare type UpLinks = {
  [key: string]: Version;
}

declare type Tags = {
  [key: string]: Version;
}

declare type Package = {
  _id?: string;
  name: string;
  versions: Versions;
  'dist-tags': GenericBody;
  time: GenericBody;
  readme?: string;
  _distfiles: DistFiles;
  _attachments: AttachMents;
  _uplinks: UpLinks;
  _rev?: string;
}

declare interface ILocalStorage {
  add(name: string): void;
  remove(name: string): void;
  get(): StorageList;
  sync(): void;
}

declare type UpLinkConf = {
  storage: string;
  cache: boolean;
  url: string;
}

declare type PackageAccess = {
  storage: string;
  publish: string;
  proxy: string;
  access: string;
}

declare type PackageList = {
  [key: string]: PackageAccess;
}

declare type UpLinksConfList = {
  [key: string]: UpLinkConf;
}

declare type Config = {
  storage: string;
  packages: PackageList;
  uplinks: UpLinksConfList;
  self_path: string;
  checkSecretKey: (token: string) => string;
  getMatchedPackagesSpec: (storage: string) => PackageAccess;
}

declare type SyncReturn = Error | void;
declare type IPackageStorage = ILocalPackageManager | void;
declare interface ILocalData {
  add(name: string): SyncReturn;
  remove(name: string): SyncReturn;
  get(): StorageList;
  getPackageStorage(packageInfo: string): IPackageStorage;
  sync(): ?SyncReturn;
}

declare interface ILocalPackageManager {
  writeTarball(name: string): IUploadTarball;
  readTarball(name: string): IReadTarball;
  readPackage(fileName: string, callback: Callback): void;
  createPackage(name: string, value: Package, cb: Callback): void;
  deletePackage(fileName: string, callback: Callback): void;
  removePackage(callback: Callback): void;
  updatePackage(pkgFileName: string,
                updateHandler: Callback,
                onWrite: Callback,
                transformPackage: Function,
                onEnd: Callback): void;
  savePackage(fileName: string, json: Package, callback: Callback): void;
}

declare module "@verdaccio/local-storage" {

  declare export type ILocalData =  ILocalData;
  declare export type IPackageStorage =  IPackageStorage;
  declare export type ILocalPackageManager =  ILocalPackageManager;

  declare class LocalDatabase<ILocalData>{
    constructor(config: Config, logger: Logger): ILocalData;
  }

  declare module.exports: typeof LocalDatabase;
  //declare export type IPackageStorage = IPackageStorage;
}

declare module "@verdaccio/streams" {
  declare export type IUploadTarball = IUploadTarball;
  declare export type IReadTarball = IReadTarball;

  declare class UploadTarball<ILocalData>{
    constructor(options: duplexStreamOptions): IUploadTarball;
    constructor(): IUploadTarball;
  }

  declare class ReadTarball<ILocalData>{
    constructor(options: duplexStreamOptions): IReadTarball;
    constructor(): IReadTarball;
  }
}

declare module "@verdaccio/file-locking" {

  declare export type LockOptions = {
    lock?: boolean,
    parse?: boolean
  };

  declare export function readFile(name: string, data: any, callback: Function): void;
  declare export function unlockFile(name: string, callback: Function): void;
  declare export function lockFile(name: string, callback: Function): void;

}


declare module "@verdaccio/types" {

  declare export type Stdout = stream$Writable | tty$WriteStream;
  declare export type Stdin = stream$Readable | tty$ReadStream;
  declare export type Package = Package;
  declare export type MergeTags = MergeTags;
  declare export type Version = Version;
  declare export type Callback = Callback;
  declare export type Logger = Logger;
  declare export type DistFile = DistFile;
  declare export type Config = Config;
  declare export type PackageList = PackageList;
  declare export type UpLinksConfList = UpLinksConfList;
  declare export type ILocalStorage = ILocalStorage;
  declare export type UpLinkConf = UpLinkConf;
  declare export type PackageAccess = PackageAccess;
  declare export type StorageList = StorageList;
  declare export type LocalStorage = LocalStorage;
  declare export type ProxyList = {
    [key: string]: IProxy | null;
  }

  declare export interface IProxy {
    config: Config;
    failed_requests: number;
    userAgent: string;
    ca: string;
    logger: Logger;
    server_id: string;
    url: any;
    maxage: string;
    timeout: string;
    max_fails: string;
    fail_timeout: string;
    upname: string;
    fetchTarball(url: string): IReadTarball;
    isUplinkValid(url: string): boolean;
  }

  declare export interface IStorageHandler {
    config: Config;
    localStorage: IStorage;
    logger: Logger;
    uplinks: ProxyList;
  }


  declare export interface IStorage {
    config: Config;
    localData: ILocalData;
    logger: Logger;
    addPackage(name: string, info: Package, callback: Callback): void;
    removePackage(name: string, callback: Callback): void;
    updateVersions(name: string, packageInfo: Package, callback: Callback): void;
    addVersion(name: string, version: string, metadata: Version, tag: string, callback: Callback): void;
    mergeTags(name: string, tags: Tags, callback: Callback): void;
    changePackage(name: string, metadata: Package, revision: string, callback: Callback): void;
    removeTarball(name: string, filename: string, revision: string, callback: Callback): void;
    addTarball(name: string, filename: string): IUploadTarball;
    getTarball(name: string, filename: string): IReadTarball;
    getPackageMetadata(name: string, callback: Callback): void;
    search(startKey: string, options: any): stream$PassThrough;
  }

  declare export interface IPlugableStorage {
    addPackage(name: string): SyncReturn;
    removePackage(name: string): SyncReturn;
    getPackage(): StorageList;
    syncPackages(): ?SyncReturn;
    createWriteStream(name: string): IUploadTarball;
    createReadStream(readTarballStream: any, callback?: Function): IReadTarball;
    readJSON(fileName: string, callback: Callback): void;
    createJSON(name: string, value: any, cb: Function): void;
    unlink(fileName: string, callback: Callback): void;
    unlockFile(fileName: string, callback: Callback): void;
    rmdir(path: string, callback: Callback): void;
    lockAndReadJSON(fileName: string, callback: Callback): void;
    writeJSON(fileName: string, json: Package, callback: Callback): void;
  }

  declare type Utils = {
    ErrorCode: any;
    getLatestVersion: Callback;
    is_object: (value: any) => boolean;
    validate_name: (value: any) => boolean;
    tag_version: (value: any, version: string, tag: string) => void;
    normalize_dist_tags: (pkg: Package) => void;
    semver_sort: (keys: Array<string>) => Array<string>;
  }

}