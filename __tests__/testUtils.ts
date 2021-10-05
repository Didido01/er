import Neo4j, * as Neo4jMockImport from 'neo4j-driver';
import { NeoVisEvents } from '../src/events';

import type Neo4jMockType from "../"

jest.mock('neo4j-driver');

const Neo4jMockImport

let counter = 1;

export function clearIdCounter() {
	counter = 1;
}

export function makeNode(labels, properties = {}): Neo4j.types.Node {
	return new Neo4j.types.Node(counter++, labels, properties);
}

export function makeRelationship(type, startNode, endNode, properties = {}) {
	return new Neo4j.types.Relationship(counter++, startNode.identity, endNode.identity, type, properties);
}

export function makePathFromNodes(nodes, relationshipType) {
	const pathSegments = [];
	for (let i = 0; i < nodes.length - 1; i++) {
		pathSegments.push(new Neo4j.types.PathSegment(
			nodes[i],
			makeRelationship(relationshipType, nodes[i], nodes[i + 1]),
			nodes[i + 1]
		));
	}
	return new Neo4j.types.Path(nodes[0], nodes[nodes.length - 1], pathSegments);
}

export function makeRecord(parameters) {
	const recordKeys = parameters.map((_, index) => index.toString());
	return new Neo4j.types.Record(recordKeys, parameters);
}

export function assertNodes(neovis, nodes, assertFunction) {
	nodes.forEach(node => {
		const dataSetNode = neovis._data.nodes.get(node.identity);
		assertFunction(node, dataSetNode);
	});
}

export function assertEdges(neovis, edges, assertFunction) {
	edges.forEach(edges => {
		const dataSetEdge = neovis._data.edges.get(edges.identity);
		assertFunction(edges, dataSetEdge);
	});
}

export function mockNormalRunSubscribe(records = []) {
	Neo4jMock.mockSessionRun.mockImplementation(() => {
		const observablePromise = Promise.resolve({ records });
		observablePromise.subscribe = ({ onNext, onCompleted }) => {
			records.forEach(onNext);
			onCompleted();
		};
		return observablePromise;
	});
}

export function mockFullRunSubscribe(cypherIdsAndAnswers): Promise<void> {
	Neo4jMock.mockSessionRun.mockImplementation((cypher, parameters) => {
		if (!cypherIdsAndAnswers[cypher]) {
			throw new Error(`the cypher '${cypher}' was not expected`);
		}
		if (!cypherIdsAndAnswers[cypher].default && !cypherIdsAndAnswers[cypher][parameters.id]) {
			throw new Error(`the id '${parameters.id}' was not expected for cypher ${cypher}`);
		}
		const records = cypherIdsAndAnswers[cypher].default || cypherIdsAndAnswers[cypher][parameters.id];
		const observablePromise = Promise.resolve({ records });
		observablePromise.subscribe = ({ onNext, onCompleted }) => {
			records.forEach(onNext);
			onCompleted();
		};
		return observablePromise;
	});
}


export function neovisRenderDonePromise(neovis): Promise<void> {
	return new Promise(res => neovis.registerOnEvent(NeoVisEvents.CompletionEvent, res));
}