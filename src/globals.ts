import { MetadataStorage } from "./metadata/MetadataStorage";
import { PlatformTools } from "./util/PlatformTools";

export function getMetadataStorage(): MetadataStorage {
  const globalScope = PlatformTools.getGlobalVariable();
  if (!globalScope.objectformMetadataStorage)
    globalScope.objectformMetadataStorage = new MetadataStorage();

  return globalScope.objectformMetadataStorage;
}
