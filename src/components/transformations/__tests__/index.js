import readYaml from 'read-yaml-promise';
import assert from 'assert';
import { resolve } from 'path';
import { Schema, Raw } from 'slate';
import fs from 'fs-promise';
import toCamel from 'to-camel-case';
import schema from '../../schema';
import transformations from '../';

const transformationNames = [
	'transformFirstLineToTitle',
	'removeAllTitleBlocksExceptFirst',
	'insertAtLeastOneParagraph'
];

describe('transforms', async () => {
	for (const transform of transformationNames) {
		describe(`${toCamel(transform)}()`, () => {
			it(transform, async () => {
				const testDir = resolve(__dirname, transform);
				const input = await readYaml(resolve(testDir, 'input.yml'));
				const expected = await readYaml(resolve(testDir, 'output.yml'));

				const state = Raw.deserialize(input, { terse: true });
				const transformedState = applyTransformation(transform, state);
				const output = Raw.serialize(transformedState, { terse: true });
				assert.deepEqual(output, expected);
			});
		});
	}
});

const applyTransformation = function(transformationName, input) {
	const currentTransformation = transformations[transformationName];
	schema['rules'] = [currentTransformation];

	return input.transform().normalize(Schema.create(schema)).apply();
};
