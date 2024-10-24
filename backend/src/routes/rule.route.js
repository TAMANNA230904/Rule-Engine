import {Router} from "express";
import { createRuleController } from "../controller/rule.controller.js";
import { evaluateRule } from "../utils/rulelogic.js";
import { Rule } from "../model/rule.model.js";
const router=Router()
router.route('/create').post(createRuleController);
router.route('/evaluate-rule').post(async (req, res) => {
  const { age, department, income } = req.body;

  try {
      const rules = await Rule.find(); // Fetch all rules
      if (rules.length === 0) {
          return res.status(404).json({ error: 'No rules found' });
      }

      const rule = rules[rules.length - 1]; // Get the last created rule
      const userData = { age, department, income };
      console.log('Received data:', { age, department, income });

      const isEligible = evaluateRule(rule.ast, userData); // Evaluate eligibility based on AST
      res.json({ eligible: isEligible });
  } catch (error) {
      res.status(500).json({ error: 'Error evaluating rule' });
  }
});

  

export default router

