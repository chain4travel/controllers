import {
  PermissionSpecificationBuilder,
  PermissionType,
  EndowmentGetterParams,
  ValidPermissionSpecification,
} from '../Permission';

const permissionName = 'endowment:wasm';

type WebAssemblyEndowmentSpecification = ValidPermissionSpecification<{
  permissionType: PermissionType.Endowment;
  targetKey: typeof permissionName;
  endowmentGetter: (_options?: any) => ['WebAssembly'];
  allowedCaveats: null;
}>;

/**
 * `endowment:wasm` returns the name of the global browser API that enables WebAssembly execution.
 * This is intended to populate the endowments of the SES Compartment in which a Snap executes.
 *
 * @param _builderOptions - optional specification builder options
 * @returns The specification for the wasm endowment
 */
const specificationBuilder: PermissionSpecificationBuilder<
  PermissionType.Endowment,
  any,
  WebAssemblyEndowmentSpecification
> = (_builderOptions?: any) => {
  return {
    permissionType: PermissionType.Endowment,
    targetKey: permissionName,
    allowedCaveats: null,
    endowmentGetter: (_getterOptions?: EndowmentGetterParams) => {
      return ['WebAssembly'];
    },
  };
};

export const webAssemblyEndowmentBuilder = Object.freeze({
  targetKey: permissionName,
  specificationBuilder,
} as const);
