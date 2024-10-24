class ASTNode {
    constructor(attribute = null, operator = null, value = null, logicalOp = null, left = null, right = null) {
        this.attribute = attribute;  // Attribute to check (e.g., "age")
        this.operator = operator;    // Comparison operator (e.g., ">", "<", "==")
        this.value = value;          // Value to compare against (e.g., 25)
        this.logicalOp = logicalOp;  // Logical operator for combining rules ("AND", "OR")
        this.left = left;            // Left child node
        this.right = right;          // Right child node
    }
}
export {ASTNode}