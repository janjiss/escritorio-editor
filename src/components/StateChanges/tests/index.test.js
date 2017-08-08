import readYaml from 'read-yaml-promise';
import { resolve } from 'path';
import { Schema, Raw } from 'slate';
import fs from 'fs-promise';
import schema from '../../schema';

const testFolders = ['addMark'];

describe('schema rules', async () => {
	for (const testFolder of testFolders) {
		describe(testFolder, () => {
			it(testFolder, async () => {
				const testDir = resolve(__dirname, testFolder);
				const input = await readYaml(resolve(testDir, 'input.yml'));
				const expected = await readYaml(resolve(testDir, 'output.yml'));

				const prepare = require(resolve(testDir, 'prepare')).default;

				const state = Raw.deserialize(input, { terse: true });
				const preparedState = prepare(state);
				const output = Raw.serialize(preparedState, { terse: true });
				expect(output).toEqual(expected);
			});
		});
	}
});
