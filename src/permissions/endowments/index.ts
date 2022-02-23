import { networkAccessEndowmentBuilder } from './network-access';
import { webAssemblyEndowmentBuilder } from './wasm';

export const endowmentPermissionBuilders = {
  [networkAccessEndowmentBuilder.targetKey]: networkAccessEndowmentBuilder,
  [webAssemblyEndowmentBuilder.targetKey]: webAssemblyEndowmentBuilder,
} as const;
