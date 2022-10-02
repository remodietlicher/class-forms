export interface ValueFetcherType {
  <T>(args?: T): Promise<any[] | undefined>;
}
/**
 * optional metadata for the form decorator
 */
export interface FormMetadataOptions {
  // a function that fetches class data from a database
  valueFetcher?: ValueFetcherType;
}
