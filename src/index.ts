import { IKey } from 'aws-cdk-lib/aws-kms';
import {
  BlockPublicAccess,
  Bucket,
  BucketEncryption,
} from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
/**
 * Bucket Properties
 */
export interface IPrivateBucketProps {
/* The `bucketName?: string;` and `key?: IKey;` in the `IPrivateBucketProps` interface are defining
optional properties for the `PrivateBucket` class in TypeScript. */
  bucketName?: string;
  key?: IKey;
};
/* The PrivateBucket class creates a private S3 bucket with specified encryption settings and access
controls. */
export class PrivateBucket extends Construct {
  constructor(scope: Construct, id: string, props: IPrivateBucketProps) {
    super(scope, id);

    new Bucket(this, 'Bucket', {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      publicReadAccess: false,
      enforceSSL: true,
      encryption: props.key
        ? BucketEncryption.KMS
        : BucketEncryption.S3_MANAGED,
      encryptionKey: props.key,
      bucketName: props.bucketName,
      bucketKeyEnabled: true,

    });
  }
}
