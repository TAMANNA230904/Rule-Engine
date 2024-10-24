import { Rule } from "../model/rule.model.js";
import { combineRules } from "../utils/rulelogic.js";

export const createRuleController = async (req, res) => {
    const { name, rules } = req.body;

    try {
        const combinedAST = combineRules(rules); // Combine multiple rules into one AST

        const newRule = new Rule({ name, ast: combinedAST });
        await newRule.save();
        return res.status(201).json(newRule);
    } catch (error) {
        console.error("Error saving rule:", error);
        return res.status(500).json({ message: "Error saving rule", error });
    }
};
