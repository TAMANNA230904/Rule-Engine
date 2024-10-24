import { ASTNode } from "../model/ast.model.js";


function createRule(ruleString) {
    // Example rule string: "age > 25" or "department == 'HR'"
    const match = ruleString.match(/(\w+)\s*(>|<|==)\s*([\w']+)/);
    if (!match) {
        throw new Error(`Invalid rule format: ${ruleString}`);
    }
    const [_, attribute, operator, value] = match;
    return new ASTNode(attribute, operator, isNaN(value) ? value.replace(/'/g, "") : parseInt(value));
  }


function combineRules(rules) {
    // Convert all rule strings into individual AST nodes
    const astNodes = rules.map(createRule);

    // Count occurrences of logical operators in the rules for heuristic use (if needed)
    const opFrequency = { AND: 0, OR: 0 };

    // Heuristic: Prioritize combining by the most frequent operator (AND/OR)
    rules.forEach(rule => {
        if (rule.includes('AND')) opFrequency.AND++;
        if (rule.includes('OR')) opFrequency.OR++;
    });

    // Choose the most frequent operator to combine the rules
    const mostFrequentOperator = opFrequency.AND >= opFrequency.OR ? 'AND' : 'OR';

    // Combine the AST nodes sequentially using the chosen logical operator
    let combinedAST = astNodes[0];
    for (let i = 1; i < astNodes.length; i++) {
        combinedAST = new ASTNode(null, null, null, mostFrequentOperator, combinedAST, astNodes[i]);
    }

    // Return the root node of the combined AST
    return combinedAST;
}


function evaluateRule(ast, data) {
    // Base case: If it's a leaf node, evaluate the condition
    if (ast.attribute && ast.operator) {
        const userValue = data[ast.attribute];  // Fetch user's data for the given attribute

        // Perform comparison based on the operator
        switch (ast.operator) {
            case '>':
                return userValue > ast.value;
            case '<':
                return userValue < ast.value;
            case '==':
                return userValue == ast.value;
            default:
                throw new Error(`Unsupported operator: ${ast.operator}`);
        }
    }

    // Recursive case: If it's a logical operator node, evaluate both left and right subtrees
    if (ast.logicalOp === 'AND') {
        return evaluateRule(ast.left, data) && evaluateRule(ast.right, data);
    } else if (ast.logicalOp === 'OR') {
        return evaluateRule(ast.left, data) || evaluateRule(ast.right, data);
    }

    throw new Error('Invalid AST structure');
}

export {createRule,combineRules,evaluateRule}