/*
 * Copyright (C) 2018 TypeFox
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import { SModelIndex, SModelElementSchema } from 'sprotty';
import { DependencyGraphNodeSchema, DependencyGraphEdgeSchema } from './graph-model';

export interface IGraphGenerator {

    readonly nodes: DependencyGraphNodeSchema[]
    readonly edges: DependencyGraphEdgeSchema[]
    readonly index: SModelIndex<SModelElementSchema>

    generateNode(name: string, version?: string): DependencyGraphNodeSchema;

    resolveNode(node: DependencyGraphNodeSchema): Promise<DependencyGraphNodeSchema[]>;

    unresolveNode(node: DependencyGraphNodeSchema): void;

    toggleResolveNode(node: DependencyGraphNodeSchema): Promise<DependencyGraphNodeSchema[]>;

    addDependencies(node: DependencyGraphNodeSchema, dependencies: { [dep: string]: string }, optional?: boolean): DependencyGraphNodeSchema[];

}

export const IGraphGenerator = Symbol('IGraphGenerator');
