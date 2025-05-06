/**
 * Non Nullable Type
 */
// type NonNull = string | number | object
type NonNull = NonNullable<string | number | null | undefined | object>;
