import { SourceLocation } from '@nger/graphql.language';
import { GraphQLError } from './graphQLError';
export function formatError(error: GraphQLError): GraphQLFormattedError {

}

export interface GraphQLFormattedError<
    TExtensions extends Record<string, any> = Record<string, any>
    > {
    readonly message: string;
    readonly locations?: ReadonlyArray<SourceLocation>;
    readonly path?: ReadonlyArray<string | number>;
    readonly extensions?: TExtensions;
}
