[neovis.js](../README.md) / NeovisConfig

# Interface: NeovisConfig

**`example`**
```js
//simple
{
     container_id: "viz",
     neo4j: {
     	server_url: "bolt://localhost:7687",
     	server_user: "neo4j",
     	server_password: "sorts-swims-burglaries"
     },
     labels: {
     	Character: {
     		label: "name",
     		value: "pagerank",
     		group: "community"
     	}
     },
     relationships: {
     	INTERACTS: {
     		value: "weight"
     	}
     },
     initial_cypher: "MATCH (n)-[r:INTERACTS]->(m) RETURN n,r,m"
}
// advance
{
     container_id: 'viz',
     neo4j: {
     	server_url: 'bolt://localhost:7687',
     	server_user: 'neo4j',
     	server_password: 'gland-presentation-worry'
     },
     visConfig: {
     	nodes: {
     		shape: 'square'
     	},
     	edges: {
     		arrows: {
     			to: {enabled: true}
     		}
     	},
     },
     labels: {
     	Character: {
     		label: 'pagerank',
     		group: 'community',
     		[NeoVis.NEOVIS_ADVANCED_CONFIG]: {
     			cypher: {
     				value: "MATCH (n) WHERE id(n) = $id RETURN n.size"
     			},
     			function: {
     				title: (node) => {
     					return viz.nodeToHtml(node, undefined);
     				}
     			},
     		}
     	}
     },
     relationships: {
     	INTERACTS: {
     		value: 'weight',
     		[NeoVis.NEOVIS_ADVANCED_CONFIG]: {
     			function: {
     				title: (edge) => {
     					return viz.nodeToHtml(edge, undefined);
     				}
     			},
     		}
     	}
     },
     initial_cypher: 'MATCH (n)-[r]->(m) RETURN n,r,m'
}
```

## Hierarchy

- [*BaseNeovisConfig*](baseneovisconfig.md)

  ↳ **NeovisConfig**

## Table of contents

### Properties

- [console\_debug](neovisconfig.md#console_debug)
- [container\_id](neovisconfig.md#container_id)
- [initial\_cypher](neovisconfig.md#initial_cypher)
- [labels](neovisconfig.md#labels)
- [neo4j](neovisconfig.md#neo4j)
- [nonFlat](neovisconfig.md#nonflat)
- [relationships](neovisconfig.md#relationships)
- [server\_database](neovisconfig.md#server_database)
- [visConfig](neovisconfig.md#visconfig)

## Properties

### console\_debug

• `Optional` **console\_debug**: *boolean*

Should output debug messages to console

**`default`** false

Inherited from: [BaseNeovisConfig](baseneovisconfig.md).[console_debug](baseneovisconfig.md#console_debug)

Defined in: [index.d.ts:127](https://github.com/thebestnom/neovis.js/blob/ed1c244/index.d.ts#L127)

___

### container\_id

• **container\_id**: *string*

Html id of the element you want NeoVis to render on

Inherited from: [BaseNeovisConfig](baseneovisconfig.md).[container_id](baseneovisconfig.md#container_id)

Defined in: [index.d.ts:103](https://github.com/thebestnom/neovis.js/blob/ed1c244/index.d.ts#L103)

___

### initial\_cypher

• `Optional` **initial\_cypher**: *string*

The Cypher query that will get the data

Inherited from: [BaseNeovisConfig](baseneovisconfig.md).[initial_cypher](baseneovisconfig.md#initial_cypher)

Defined in: [index.d.ts:122](https://github.com/thebestnom/neovis.js/blob/ed1c244/index.d.ts#L122)

___

### labels

• `Optional` **labels**: *object*

**`example`** ```javascript
{
	Character: {
	label: 'pagerank',
		group: 'community',
		[NeoVis.NEOVIS_ADVANCED_CONFIG]: {
			cypher: {
				value: "MATCH (n) WHERE id(n) = $id RETURN n.size"
			},
			function: {
				title: (node) => {
					return viz.nodeToHtml(node, undefined);
				}
			},
		}
	}
}
```

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[NEOVIS_DEFAULT_CONFIG]?` | [*LabelConfig*](labelconfig.md) |

Defined in: [index.d.ts:234](https://github.com/thebestnom/neovis.js/blob/ed1c244/index.d.ts#L234)

___

### neo4j

• `Optional` **neo4j**: [*Neo4jConfig*](neo4jconfig.md) \| Driver

Neo4j Driver instance or configuration to make one

Inherited from: [BaseNeovisConfig](baseneovisconfig.md).[neo4j](baseneovisconfig.md#neo4j)

Defined in: [index.d.ts:112](https://github.com/thebestnom/neovis.js/blob/ed1c244/index.d.ts#L112)

___

### nonFlat

• `Optional` **nonFlat**: ``false``

Tells Neovis is the config is flat or not

Overrides: [BaseNeovisConfig](baseneovisconfig.md).[nonFlat](baseneovisconfig.md#nonflat)

Defined in: [index.d.ts:213](https://github.com/thebestnom/neovis.js/blob/ed1c244/index.d.ts#L213)

___

### relationships

• `Optional` **relationships**: *object*

**`example`**
``` js
{
     INTERACTS: {
 	    value: 'weight',
 	    [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
 	    	function: {
 	    		title: (edge) => {
 	    			return viz.nodeToHtml(edge, undefined);
 	    		}
 	    	},
 	    }
     }
}
```

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[NEOVIS_DEFAULT_CONFIG]?` | [*RelationshipConfig*](relationshipconfig.md) |

Defined in: [index.d.ts:255](https://github.com/thebestnom/neovis.js/blob/ed1c244/index.d.ts#L255)

___

### server\_database

• `Optional` **server\_database**: *string*

database name you want to connect to

**`default`** neo4j

Inherited from: [BaseNeovisConfig](baseneovisconfig.md).[server_database](baseneovisconfig.md#server_database)

Defined in: [index.d.ts:108](https://github.com/thebestnom/neovis.js/blob/ed1c244/index.d.ts#L108)

___

### visConfig

• `Optional` **visConfig**: Options

Vis network config to override neovis defaults

**`link`** https://visjs.github.io/vis-network/docs/network/#options

Inherited from: [BaseNeovisConfig](baseneovisconfig.md).[visConfig](baseneovisconfig.md#visconfig)

Defined in: [index.d.ts:117](https://github.com/thebestnom/neovis.js/blob/ed1c244/index.d.ts#L117)