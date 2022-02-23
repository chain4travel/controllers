import { PermissionType } from '../Permission';
import { webAssemblyEndowmentBuilder } from './wasm';

describe('endowment:wasm', () => {
  it('builds the expected permission specification', () => {
    const specification = webAssemblyEndowmentBuilder.specificationBuilder({});
    expect(specification).toStrictEqual({
      permissionType: PermissionType.Endowment,
      targetKey: 'endowment:wasm',
      endowmentGetter: expect.any(Function),
      allowedCaveats: null,
    });

    expect(specification.endowmentGetter()).toStrictEqual(['WebAssembly']);
  });
});
