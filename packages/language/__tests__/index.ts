import { parse } from 'graphql';
import { join } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { print } from '../lib/print';
import { moduleRef } from '../lib/module';
import { ASTNode } from '../lib/ast';
const ast = parse(readFileSync(join(__dirname, `test.graphql`)).toString('utf8'))
const res = moduleRef.create<ASTNode>(ast, 'kind')
const graphql = print(res)
writeFileSync(join(__dirname, 'test2.graphql'), graphql)
debugger;
