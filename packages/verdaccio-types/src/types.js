/* @flow */

declare type verdaccio$StringValue = string | void | null;

stream$PassThrough

declare type verdaccio$Callback = Function;

declare type verdaccio$StorageList = Array<string>;

declare type verdaccio$LocalStorage = {
  list: verdaccio$StorageList;
  secret: string;
}

declare type verdaccio$Dist = {
  integrity?: string;
  shasum: string;
  tarball: string;
}

declare type verdaccio$Author = {
  name: string;
  email: string;
}

declare type verdaccio$RemoteUser = {
  real_groups: Array<string>;
  groups: Array<string>;
  name: string | void;
  error?: string;
}

declare type verdaccio$Version = {
  name: string,
  version: string,
  devDependencies: string,
  directories: any,
  dist: verdaccio$Dist,
  author: string,
  main: string,
  homemage: string,
  license: string,
  readme: string,
  readmeFileName: string,
  description: string,
  bin: string,
  bugs: any,
  files: Array<string>,
  gitHead: string,
  maintainers: Array<verdaccio$Author>,
  repository: string | any,
  scripts: any,
  homepage: string,
  dist: verdaccio$Dist,
  readmeFilename: string;
  etag: string;
  contributors: Array<verdaccio$Author>,
  dependencies: any,
  keywords: string | Array<string>,
  _id: string,
  nodeVersion: string,
  _npmUser: verdaccio$Author,
  _hasShrinkwrap: boolean
};

declare type verdaccio$Logger = {
  child: (conf: any) => any;
  debug: (conf: any, template?: mixed) => void;
  error: (conf: any, template?: mixed) => void;
  http: (conf: any, template?: mixed) => void;
  trace: (conf: any, template?: mixed) => void;
  warn: (conf: any, template?: mixed) => void;
  info: (conf: any, template?: mixed) => void;
}

declare type verdaccio$Versions = {
  [key: string]: verdaccio$Version;
}

declare type verdaccio$DistFile = {
  url: string;
  sha: string;
  registry?: string;
}

declare type verdaccio$MergeTags = {
  [key: string]: string;
}

declare type verdaccio$DistFiles = {
  [key: string]: verdaccio$DistFile;
}

declare type verdaccio$AttachMents = {
  [key: string]: verdaccio$Version;
}

declare type verdaccio$GenericBody = {
  [key: string]: string;
}

declare type verdaccio$UpLinkMetadata = {
  etag: string;
  fetched: number;
}

declare type verdaccio$UpLinks = {
  [key: string]: verdaccio$UpLinkMetadata;
}

declare type verdaccio$Tags = {
  [key: string]: verdaccio$Version;
}

declare type verdaccio$Headers = {
  [key: string]: string;
}

declare type verdaccio$Package = {
  _id?: string;
  name: string;
  versions: verdaccio$Versions;
  'dist-tags': verdaccio$GenericBody;
  time?: verdaccio$GenericBody;
  readme?: string;
  _distfiles: verdaccio$DistFiles;
  _attachments: verdaccio$AttachMents;
  _uplinks: verdaccio$UpLinks;
  _rev: string;
}

declare class verdaccio$IUploadTarball extends stream$PassThrough {
  abort: Function;
  done: Function;
  _transform: Function;
  abort(): void;
  done(): void;
}

declare class verdaccio$IReadTarball extends stream$PassThrough {
  abort: Function;
  abort(): void;
}

declare type verdaccio$UpLinkTokenConf = {
  type: "Bearer" | "Basic",
  token?: string,
  token_env?: boolean | string
}

declare type verdaccio$UpLinkConf = {
  url: string;
  ca?: string;
  cache?: boolean;
  timeout?: string | void;
  maxage?: string | void;
  max_fails?: number | void;
  fail_timeout?: string | void;
  headers?: verdaccio$Headers;
  auth?: verdaccio$UpLinkTokenConf;
  strict_ssl?: boolean | void;
}

declare type verdaccio$PackageAccess = {
  storage?: string;
  publish?: Array<string>;
  proxy?: Array<string>;
  access?: Array<string>;
  allow_access?: Array<string>;
  allow_publish?: Array<string>;
  proxy_access?: Array<string>;
}

declare type verdaccio$PackageList = {
  [key: string]: verdaccio$PackageAccess;
}

declare type verdaccio$UpLinksConfList = {
  [key: string]: verdaccio$UpLinkConf;
}

declare type verdaccio$LoggerType = 'stdout' | 'stderr' | 'file';
declare type verdaccio$LoggerFormat = 'pretty' | 'pretty-timestamped' | 'file';
declare type verdaccio$LoggerLevel = 'http' | 'fatal' | 'warn' | 'info' | 'debug' | 'trace';

declare type verdaccio$LoggerConfItem = {
  type: verdaccio$LoggerType;
  format: verdaccio$LoggerFormat;
  level: verdaccio$LoggerLevel;
}

declare type verdaccio$PublishOptions = {
  allow_offline: boolean;
}

declare type verdaccio$AuthConf = any | verdaccio$AuthHtpasswd;

declare type verdaccio$Notifications = {
  method: string;
  packagePattern: RegExp;
  packagePatternFlags: string;
  headers: verdaccio$Headers;
  endpoint: string;
  content: string;
  [key: string]: string;
}

declare type verdaccio$ConfigFile = {
  storage: string;
  plugins: string;
  self_path: string;
  packages: verdaccio$PackageList;
  uplinks: verdaccio$UpLinksConfList;
  logs: Array<verdaccio$LoggerConf>;
  web: verdaccio$WebConf;
  auth: verdaccio$AuthConf;
  publish?: verdaccio$PublishOptions;
  url_prefix?: string;
  listen?: verdaccio$ListenAddress;
  https?: verdaccio$HttpsConf;
  http_proxy?: string;
  https_proxy?: string;
  no_proxy?: string;
  max_body_size?: string;
  notifications: verdaccio$Notifications;
}

declare type verdaccio$SyncReturn = Error | void;
declare type verdaccio$IPackageStorage = verdaccio$ILocalPackageManager | void;

declare interface verdaccio$AuthHtpasswd {
  file: string;
  max_users: number;
}

declare interface verdaccio$ILocalStorage {
  add(name: string): void;
  remove(name: string): void;
  get(): verdaccio$StorageList;
  sync(): void;
}

declare interface verdaccio$LoggerConf {
  [key: string]: verdaccio$LoggerConfItem;
}

declare interface verdaccio$ListenAddress {
  [key: string]: string;
}

declare interface verdaccio$WebConf {
  enable: boolean;
  title: string;
  logo: string;
}

declare interface verdaccio$HttpsConf {
  key?: string;
  cert?: string;
  ca?: string;
  pfx?: string;
  passphrase?: string;
}

declare type verdaccio$JWTOptions = {
  sign: verdaccio$JWTSignOptions;
  verify: verdaccio$JWTVerifyOptions;
}

declare type verdaccio$JWTVerifyOptions = {
  algorithm?: string;
  expiresIn?: string;
  notBefore?: string | number;
  ignoreExpiration?: boolean;
  maxAge?: string | number;
  clockTimestamp?: number;
}

declare type verdaccio$JWTSignOptions = {
  algorithm?: string;
  expiresIn?: string;
  notBefore?: string;
  ignoreExpiration?: boolean;
  maxAge?: string | number;
  clockTimestamp?: number;
}

declare type verdaccio$APITokenOptions = {
  legacy: boolean;
  jwt?: verdaccio$JWTOptions;
}

declare type verdaccio$Security = {
  web: verdaccio$JWTOptions;
  api: verdaccio$APITokenOptions;
}

declare interface verdaccio$Config {
  user_agent: string;
  server_id: any;
  _debug?: boolean;
  storage?: string | void;
  plugins?: string | void;
  secret: string;
  self_path: string;
  packages: verdaccio$PackageList;
  uplinks: verdaccio$UpLinksConfList;
  logs?: Array<verdaccio$LoggerConf>;
  web?: verdaccio$WebConf;
  auth?: verdaccio$AuthConf;
  security: verdaccio$Security;
  publish?: verdaccio$PublishOptions;
  url_prefix?: string;
  store?: any;
  listen?: verdaccio$ListenAddress;
  https?: verdaccio$HttpsConf;
  http_proxy?: string;
  https_proxy?: string;
  no_proxy?: string;
  max_body_size?: string;
  notifications?: verdaccio$Notifications;
  middlewares?: any;
  checkSecretKey(token: string): string;
  getMatchedPackagesSpec(storage: string): verdaccio$PackageAccess | void;
  [key: string]: any;
}

declare interface verdaccio$ILocalData extends verdaccio$IPlugin {
  logger: verdaccio$Logger;
  config: $Subtype<verdaccio$Config>;
  add(name: string, callback: verdaccio$Callback): void;
  remove(name: string, callback: verdaccio$Callback): void;
  get(callback: verdaccio$Callback): void;
  getSecret(): Promise<string>;
  setSecret(secret: string): Promise<any>;
  getPackageStorage(packageInfo: string): verdaccio$IPackageStorage;
  search(onPackage: verdaccio$Callback, onEnd: verdaccio$Callback, validateName: Function): void;
}

declare interface verdaccio$ILocalPackageManager {
  path: string;
  logger: verdaccio$Logger;
  writeTarball(name: string): verdaccio$IUploadTarball;
  readTarball(name: string): verdaccio$IReadTarball;
  readPackage(fileName: string, callback: verdaccio$Callback): void;
  createPackage(name: string, value: verdaccio$Package, cb: verdaccio$Callback): void;
  deletePackage(fileName: string, callback: verdaccio$Callback): void;
  removePackage(callback: verdaccio$Callback): void;
  updatePackage(pkgFileName: string,
                updateHandler: verdaccio$Callback,
                onWrite: verdaccio$Callback,
                transformPackage: Function,
                onEnd: verdaccio$Callback): void;
  savePackage(fileName: string, json: verdaccio$Package, callback: verdaccio$Callback): void;
}

declare interface verdaccio$TarballActions {
  addTarball(name: string, filename: string): verdaccio$IUploadTarball;
  getTarball(name: string, filename: string): verdaccio$IReadTarball;
  removeTarball(name: string, filename: string, revision: string, callback: verdaccio$Callback): void;
}

declare interface verdaccio$StoragePackageActions extends verdaccio$TarballActions {
  addVersion(name: string, version: string, metadata: verdaccio$Version, tag: verdaccio$StringValue, callback: verdaccio$Callback): void;
  mergeTags(name: string, tags: verdaccio$MergeTags, callback: verdaccio$Callback): void;
  removePackage(name: string, callback: verdaccio$Callback): void;
  changePackage(name: string, metadata: verdaccio$Package, revision: string, callback: verdaccio$Callback): void;
}

declare interface verdaccio$IStorageManager extends verdaccio$StoragePackageActions {
  config: $Subtype<verdaccio$Config>;
  logger: verdaccio$Logger;
  init(config: $Subtype<verdaccio$Config>): Promise<any>;
  addPackage(name: string, metadata: any, callback: verdaccio$Callback): Promise<any>;
  getPackage(options: any): void;
  search(startkey: string, options: any): verdaccio$IReadTarball;
  getLocalDatabase(callback: verdaccio$Callback): void;
}

declare interface verdaccio$IBasicStorage extends verdaccio$StoragePackageActions {
  addPackage(name: string, info: verdaccio$Package, callback: verdaccio$Callback): void;
  updateVersions(name: string, packageInfo: verdaccio$Package, callback: verdaccio$Callback): void;
  getPackageMetadata(name: string, callback: verdaccio$Callback): void;
  search(startKey: string, options: any): verdaccio$IReadTarball;
  getSecret(config: $Subtype<verdaccio$Config>): Promise<any>;
}

declare interface verdaccio$IBasicAuth {
  config: $Subtype<verdaccio$Config>;
  aesEncrypt(buf: Buffer): Buffer;
  authenticate(user: string, password: string, cb: verdaccio$Callback): void;
  allow_access(packageName: string, user: verdaccio$RemoteUser, callback: verdaccio$Callback): void;
  add_user(user: string, password: string, cb: verdaccio$Callback): any;
}

declare interface verdaccio$IPlugin {
  version?: string;
}

declare type verdaccio$PluginOptions = {
  config: $Subtype<verdaccio$Config>;
  logger: verdaccio$Logger
}

declare interface verdaccio$IPluginAuth extends verdaccio$IPlugin {
  login_url?: string;
  authenticate(user: string, password: string, cb: verdaccio$Callback): void;
  adduser(user: string, password: string, cb: verdaccio$Callback): void;
  allow_access(user: verdaccio$RemoteUser, pkg: $Subtype<verdaccio$PackageAccess>, cb: verdaccio$Callback): void;
  allow_publish(user: verdaccio$RemoteUser, pkg: $Subtype<verdaccio$PackageAccess>, cb: verdaccio$Callback): void;
}

declare interface verdaccio$IPluginMiddleware extends verdaccio$IPlugin {
  register_middlewares(app: any, auth: verdaccio$IBasicAuth, storage: verdaccio$IStorageManager): void;
}

declare module "@verdaccio/local-storage" {
  declare export type ILocalData =  verdaccio$ILocalData;
  declare export type IPluginStorage =  verdaccio$ILocalData;
  declare export type IPackageStorage =  verdaccio$IPackageStorage;
  declare export type ILocalPackageManager =  verdaccio$ILocalPackageManager;
  declare export type IPackageStorageManager =  verdaccio$ILocalPackageManager;
  declare class LocalDatabase<ILocalData>{
    constructor(config: $Subtype<verdaccio$Config>, logger: verdaccio$Logger): ILocalData;
  }
  declare module.exports: typeof LocalDatabase;
}

declare module "@verdaccio/streams" {
  declare type IUploadTarball = verdaccio$IUploadTarball;
  declare type IReadTarball = verdaccio$IReadTarball;
  declare class UploadTarball<ILocalData>{
    abort: Function;
    done: Function;
    constructor(options: duplexStreamOptions): verdaccio$IUploadTarball;
    constructor(): verdaccio$IUploadTarball;
  }
  declare class ReadTarball<ILocalData>{
    abort: Function;
    constructor(options: duplexStreamOptions): verdaccio$IReadTarball;
    constructor(): verdaccio$IReadTarball;
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
  declare export type IStorageManager = verdaccio$IStorageManager;
  declare export type IBasicStorage = verdaccio$IBasicStorage;
  declare export type IBasicAuth = verdaccio$IBasicAuth;
  declare export type IPluginAuth = verdaccio$IPluginAuth;
  declare export type IPluginMiddleware = verdaccio$IPluginMiddleware;
  declare export type PluginOptions = verdaccio$PluginOptions;
  declare export type Stdout = stream$Writable | tty$WriteStream;
  declare export type Stdin = stream$Readable | tty$ReadStream;
  declare export type RemoteUser = verdaccio$RemoteUser;
  declare export type Package = verdaccio$Package;
  declare export type MergeTags = verdaccio$MergeTags;
  declare export type Version = verdaccio$Version;
  declare export type Callback = verdaccio$Callback;
  declare export type Logger = verdaccio$Logger;
  declare export type DistFile = verdaccio$DistFile;
  declare export type Versions = verdaccio$Versions;
  declare export type Config = verdaccio$Config;
  declare export type ConfigFile = verdaccio$ConfigFile;
  declare export type LoggerConf = verdaccio$LoggerConf;
  declare export type WebConf = verdaccio$WebConf;
  declare export type AuthConf = verdaccio$AuthConf;
  declare export type PublishOptions = verdaccio$PublishOptions;
  declare export type ListenAddress = verdaccio$ListenAddress;
  declare export type HttpsConf = verdaccio$HttpsConf;
  declare export type Notifications = verdaccio$Notifications;
  declare export type Headers = verdaccio$Headers;
  declare export type LoggerConfItem = verdaccio$LoggerConfItem;
  declare export type LoggerLevel = verdaccio$LoggerLevel;
  declare export type LoggerFormat = verdaccio$LoggerFormat;
  declare export type LoggerType = verdaccio$LoggerType;
  declare export type PackageList = verdaccio$PackageList;
  declare export type UpLinksConfList = verdaccio$UpLinksConfList;
  declare export type UpLinkMetadata = verdaccio$UpLinkMetadata;
  declare export type ILocalStorage = verdaccio$ILocalStorage;
  declare export type UpLinkConf = verdaccio$UpLinkConf;
  declare export type PackageAccess = verdaccio$PackageAccess;
  declare export type StorageList = verdaccio$StorageList;
  declare export type LocalStorage = verdaccio$LocalStorage;
  declare export type StringValue = verdaccio$StringValue;
  declare export type Security = verdaccio$Security;
  declare export type APITokenOptions = verdaccio$APITokenOptions;
  declare export type JWTOptions = verdaccio$JWTOptions;
  declare export type JWTSignOptions = verdaccio$JWTSignOptions;
  declare export type JWTVerifyOptions = verdaccio$JWTVerifyOptions;
}
