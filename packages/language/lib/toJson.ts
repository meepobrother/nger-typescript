import * as ast from './ast';
export class ToJsonVisitor implements ast.Visitor {
    visit(node?: ast.Node | undefined, context?: any): any {
        if (node) return node.toJson(this, context)
    }
    visits(nodes?: ast.Node[] | undefined, context?: any): any {
        if (nodes) {
            return nodes.map(node => this.visit(node, context))
        }
    }
    visitSelectionSetNode(node: ast.SelectionSetNode, context?: any): any {
        return node.visit(this, context)
    }
    visitFieldNode(node: ast.FieldNode, context?: any): any {
        return node.visit(this, context)
    }
    visitArgumentNode(node: ast.ArgumentNode, context?: any): any {
        return node.visit(this, context)
    }
    visitFragmentSpreadNode(node: ast.FragmentSpreadNode, context?: any): any {
        return node.visit(this, context)
    }
    visitInlineFragmentNode(node: ast.InlineFragmentNode, context?: any): any {
        return node.visit(this, context)
    }
    visitFragmentDefinitionNode(node: ast.FragmentDefinitionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitIntValueNode(node: ast.IntValueNode, context?: any): any {
        return node.visit(this, context)
    }
    visitFloatValueNode(node: ast.FloatValueNode, context?: any): any {
        return node.visit(this, context)
    }
    visitStringValueNode(node: ast.StringValueNode, context?: any): any {
        return node.visit(this, context)
    }
    visitBooleanValueNode(node: ast.BooleanValueNode, context?: any): any {
        return node.visit(this, context)
    }
    visitNullValueNode(node: ast.NullValueNode, context?: any): any {
        return node.visit(this, context)
    }
    visitEnumValueNode(node: ast.EnumValueNode, context?: any): any {
        return node.visit(this, context)
    }
    visitListValueNode(node: ast.ListValueNode, context?: any): any {
        return node.visit(this, context)
    }
    visitObjectValueNode(node: ast.ObjectValueNode, context?: any): any {
        return node.visit(this, context)
    }
    visitObjectFieldNode(node: ast.ObjectFieldNode, context?: any): any {
        return node.visit(this, context)
    }
    visitDirectiveNode(node: ast.DirectiveNode, context?: any): any {
        return node.visit(this, context)
    }
    visitNamedTypeNode(node: ast.NamedTypeNode, context?: any): any {
        return node.visit(this, context)
    }
    visitListTypeNode(node: ast.ListTypeNode, context?: any): any {
        return node.visit(this, context)
    }
    visitNonNullTypeNode(node: ast.NonNullTypeNode, context?: any): any {
        return node.visit(this, context)
    }
    visitSchemaDefinitionNode(node: ast.SchemaDefinitionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitOperationTypeDefinitionNode(node: ast.OperationTypeDefinitionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitScalarTypeDefinitionNode(node: ast.ScalarTypeDefinitionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitObjectTypeDefinitionNode(node: ast.ObjectTypeDefinitionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitFieldDefinitionNode(node: ast.FieldDefinitionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitInputValueDefinitionNode(node: ast.InputValueDefinitionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitInterfaceTypeDefinitionNode(node: ast.InterfaceTypeDefinitionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitUnionTypeDefinitionNode(node: ast.UnionTypeDefinitionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitEnumTypeDefinitionNode(node: ast.EnumTypeDefinitionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitEnumValueDefinitionNode(node: ast.EnumValueDefinitionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitInputObjectTypeDefinitionNode(node: ast.InputObjectTypeDefinitionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitDirectiveDefinitionNode(node: ast.DirectiveDefinitionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitSchemaExtensionNode(node: ast.SchemaExtensionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitScalarTypeExtensionNode(node: ast.ScalarTypeExtensionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitObjectTypeExtensionNode(node: ast.ObjectTypeExtensionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitInterfaceTypeExtensionNode(node: ast.InterfaceTypeExtensionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitUnionTypeExtensionNode(node: ast.UnionTypeExtensionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitEnumTypeExtensionNode(node: ast.EnumTypeExtensionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitInputObjectTypeExtensionNode(node: ast.InputObjectTypeExtensionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitNameNode(node: ast.NameNode, context?: any): any {
        return node.visit(this, context)
    }
    visitDocumentNode(node: ast.DocumentNode, context?: any): any {
        return node.visit(this, context)
    }
    visitOperationDefinitionNode(node: ast.OperationDefinitionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitVariableDefinitionNode(node: ast.VariableDefinitionNode, context?: any): any {
        return node.visit(this, context)
    }
    visitVariableNode(node: ast.VariableNode, context?: any): any {
        return node.visit(this, context)
    }
}
