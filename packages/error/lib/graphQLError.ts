import Maybe from '../tsutils/Maybe';
import { ASTNode, Source, SourceLocation, getLocation } from '@nger/graphql.language';
export class GraphQLError extends Error {
    message: string;
    readonly locations: ReadonlyArray<SourceLocation> | undefined;
    readonly path: ReadonlyArray<string | number> | undefined;
    readonly nodes: ReadonlyArray<ASTNode> | undefined;
    readonly source: Source | undefined;
    readonly positions: ReadonlyArray<number> | undefined;
    readonly originalError: Maybe<Error>;
    readonly extensions: { [key: string]: any } | undefined;
    constructor(
        message: string,
        nodes?: ReadonlyArray<ASTNode> | ASTNode | undefined,
        source?: Maybe<Source>,
        positions?: Maybe<ReadonlyArray<number>>,
        path?: Maybe<ReadonlyArray<string | number>>,
        originalError?: Maybe<Error>,
        extensions?: Maybe<{ [key: string]: any }>,
    ) {
        super(message)
    }
}

export function printError(error: GraphQLError): string { }
