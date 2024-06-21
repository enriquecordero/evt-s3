import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Enrique Cordero',
  authorAddress: 'ecs5000@gmail.com',
  cdkVersion: '2.144.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'projen-s3',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/enriquecordero/evt-s3.git',
  npmRegistryUrl: 'https://evt-s3-913008941063.d.codeartifact.us-east-1.amazonaws.com/npm/evt-s3/',


  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();