import { MetadataStorage } from "./metadata/MetadataStorage";
import { PlatformTools } from "./util/PlatformTools";

/**
 * Container for the globally stored metadata generated
 * by the decorators
 *
 * @returns the metadata storage object
 */
export function getMetadataStorage(): MetadataStorage {
  const globalScope = PlatformTools.getGlobalVariable();
  if (!globalScope.objectformMetadataStorage)
    globalScope.objectformMetadataStorage = new MetadataStorage();

  return globalScope.objectformMetadataStorage;
}
