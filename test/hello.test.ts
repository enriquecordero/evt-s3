import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { PrivateBucket } from '../src/index';


test('S3 bucket evt params', () => {
  const stack = new cdk.Stack();
  new PrivateBucket(stack, 'PrivateBucket', {});
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::S3::Bucket', {
    PublicAccessBlockConfiguration: {
      BlockPublicAcls: true,
      BlockPublicPolicy: true,
      IgnorePublicAcls: true,
      RestrictPublicBuckets: true,
    },
  });

});
