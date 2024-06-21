# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateBucket <a name="PrivateBucket" id="projen-s3.PrivateBucket"></a>

#### Initializers <a name="Initializers" id="projen-s3.PrivateBucket.Initializer"></a>

```typescript
import { PrivateBucket } from 'projen-s3'

new PrivateBucket(scope: Construct, id: string, props: IPrivateBucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-s3.PrivateBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#projen-s3.PrivateBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-s3.PrivateBucket.Initializer.parameter.props">props</a></code> | <code><a href="#projen-s3.IPrivateBucketProps">IPrivateBucketProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="projen-s3.PrivateBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="projen-s3.PrivateBucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="projen-s3.PrivateBucket.Initializer.parameter.props"></a>

- *Type:* <a href="#projen-s3.IPrivateBucketProps">IPrivateBucketProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-s3.PrivateBucket.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="projen-s3.PrivateBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-s3.PrivateBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="projen-s3.PrivateBucket.isConstruct"></a>

```typescript
import { PrivateBucket } from 'projen-s3'

PrivateBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="projen-s3.PrivateBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-s3.PrivateBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-s3.PrivateBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IPrivateBucketProps <a name="IPrivateBucketProps" id="projen-s3.IPrivateBucketProps"></a>

- *Implemented By:* <a href="#projen-s3.IPrivateBucketProps">IPrivateBucketProps</a>

Bucket Properties.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-s3.IPrivateBucketProps.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-s3.IPrivateBucketProps.property.key">key</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="projen-s3.IPrivateBucketProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `key`<sup>Optional</sup> <a name="key" id="projen-s3.IPrivateBucketProps.property.key"></a>

```typescript
public readonly key: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

